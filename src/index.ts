function debounce(ms: number) {
    let timeId: number | null;
    return (target: object, key: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
        console.log(target);
        console.log(key);
        const originalFn = descriptor.value;
        return {
            ...descriptor,
            value: (...args: any[]) => {
                if (timeId) {
                    clearTimeout(timeId);
                }
                timeId = setTimeout(() => {
                    originalFn(...args);
                }, ms);
            },
        };
    };
}

function logInputValue(_target: object, _key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalFn = descriptor.value;
    return {
        ...descriptor,
        value: (event: Event) => {
            const inputEl: HTMLInputElement = event.target as HTMLInputElement;
            console.log(inputEl.value);
            return originalFn(event);
        },
    };
};

class Search {
    public constructor(private element: HTMLInputElement) {
        const h = debounce1(this.onSearch, 500);
        this.element.addEventListener('input', h);
    }

    // @debounce(500)
    // @logInputValue
    public onSearch(_event: Event) {
        console.log(_event);
    }
}

const input = document.querySelector('.search') as HTMLInputElement;

const search = new Search(input);


function debounce1(fn: (e: Event) => void, ms: number) {
    let timeId: number | null;
    return (e: Event) => {
        if (timeId) {
            clearTimeout(timeId);
        }
        timeId = setTimeout(() => {
            fn(e);
        }, ms);
    };
};
