import React from 'react'

export const RobotCard = (Props) => {
  return (
    <div key={Props.robot._id}>
        <img src={Props.robot.ImageUrl} alt={Props.robot.Name} />
        <h1>{Props.robot.Name}</h1>
        <p>{Props.robot.Price}</p>
        <p>{Props.robot.Description}</p>
    </div>
  )
}
