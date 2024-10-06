import Part from "components/Part/Part"

const Content = ({parts}) => {
    return (
      <ul>
        {parts.map(part =>
          <li key={part.id}><Part part={part.name} exercise={part.exercises}></Part></li> 
        )}
      </ul>
      
    )
}

export default Content