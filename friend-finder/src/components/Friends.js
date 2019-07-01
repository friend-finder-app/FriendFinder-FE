import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import noAvatar from "../images/no_avatar.jpg"
import ProfileItem from "./ProfileItem"

const dummy = [
  {
    name: "My Friends",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  },
  {
    name: "My Friends",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  },
  {
    name: "My Friends",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  },
  {
    name: "My Friends",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  },
  {
    name: "My Friends",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  },
  {
    name: "My Friends",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  },
  {
    name: "My Friends",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  },
  {
    name: "My Friends",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  }
]

const Friends = props => {

  let profileItems = dummy.map((item, index) => {
    return (
      <ProfileItem 
        key={index}
        name={item.name}
        location={item.location}
        image={item.image}
        hobbies={item.hobbies}
      />
    )
  })

  return (
    <Fragment>
      {profileItems}
    </Fragment>
  )

}

Friends.propTypes = {

}

export default Friends
