import React from 'react'
import useSWR from 'swr'
import useSwrCustom from '../hooks/useSwrCustom'
function UseSwr() {
    // const {data,error}=useSWR('https://jsonplaceholder.typicode.com/users',fetch)
    // console.log(data,error)

// useSwrCustom("https://jsonplaceholder.typicode.com/users").then((response)=>console.log(response))

// const url=useSwrCustom("https://jsonplaceholder.typicode.com/users")
fetch("https://jsonplaceholder.typicode.com/users").then((response)=>console.log(response))
  return (
    <div>UseSwr</div>
  )
}

export default UseSwr