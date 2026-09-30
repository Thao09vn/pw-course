class Student {
    name: string;
    classCode: string;
    address: string;
    test1: number;
    test2: number;

    constructor(name: string, classCode: string, address: string, test1: number, test2: number) {
        this.name = name;
        this.classCode = classCode;
        this.address = address;
        this.test1 = test1;
        this.test2 = test2;
    }

    doiDiaChi(newAddress: string) {
        this.address = newAddress
    }
}

const student1 = new Student("Thao", "12A", "HN", 10, 10);
const student2 = new Student("Thao2", "12A", "HN", 10, 10);
student2.doiDiaChi("HCM);")