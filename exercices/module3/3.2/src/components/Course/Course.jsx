import Content from "components/Content/Content";
import Header from "components/Header/Header";

const Course = ({course}) => {
    return (
        <>
            <Header course={course.name}></Header>
            <Content parts={course.parts}></Content>
        </>
    )
}

export default Course;