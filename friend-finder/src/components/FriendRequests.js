import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import noAvatar from "../images/no_avatar.jpg"
import ProfileItem from "./ProfileItem"

const dummy = [
  {
    name: "Friends Request",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  },
  {
    name: "Friends Request",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  },
  {
    name: "Friends Request",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  },
  {
    name: "Friends Request",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  },
  {
    name: "Friends Request",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  },
  {
    name: "Friends Request",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  },
  {
    name: "Friends Request",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  },
  {
    name: "Friends Request",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  }
]


const FriendRequests = props => {
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

FriendRequests.propTypes = {

}

export default FriendRequests
