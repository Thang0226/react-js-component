import {Component} from "react";

const students = [
    {
        id: 1,
        name: "Nguyen Van A",
        age: 30,
        address: "Ha Noi"
    },
    {
        id: 2,
        name: "Tran Thi B",
        age: 25,
        address: "Ho Chi Minh City"
    },
    {
        id: 3,
        name: "Le Van C",
        age: 22,
        address: "Da Nang"
    },
    {
        id: 4,
        name: "Pham Thi D",
        age: 28,
        address: "Can Tho"
    },
    {
        id: 5,
        name: "Nguyen Van E",
        age: 24,
        address: "Hai Phong"
    },
    {
        id: 6,
        name: "Do Thi F",
        age: 27,
        address: "Nha Trang"
    },
    {
        id: 7,
        name: "Hoang Van G",
        age: 23,
        address: "Hue"
    },
    {
        id: 8,
        name: "Vo Thi H",
        age: 29,
        address: "Quang Ninh"
    }
];

class Student extends Component {
    render() {
        return (
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
                {students.map((student) => (
                    <tr>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.address}</td>
                    </tr>
                ))}
            </table>
        );
    }
}

export default Student;
















