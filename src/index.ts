// type/interface/function/class

interface IMaleInfo {
    male: boolean;
}

interface IAccount<Info extends { salary: number } & IMaleInfo, Id = number> {
    id: Id;
    name: string;
    info: Info;
}

let user: IAccount<{ salary: number, male: boolean, rules: string[] }> = {
    id: 1231234,
    info: {
        male: true,
        rules: ['read', 'write'],
        salary: 3000,
    },
    name: 'Ihor',
};
let admin: IAccount<{ salary: number, male: boolean }, string> = {
    id: 'asdasd1231234',
    info: {
        male: true,
        salary: 3000,
    },
    name: 'Ihor',
};


function getProperty<Target, Key extends keyof Target>(obj: Target, key: Key) {
    return obj[key];
}

const key1 = 'name';
getProperty(admin, key1);
