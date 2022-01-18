import { UserResultPreview } from 'js/cmps/UserResultPreview'
import React from 'react'


export const UserResultList = (props:{result:any,userId:string}) => {
    const {result,userId} = props
    const options:any =Object.entries(result)

    return (
        <div className='result'>
            {options.map((option:any)=>{
                const optionName= option[0].toLowerCase()
                const optionDetail = option[1]
                return optionDetail.map((activities:any,idx:number)=>{
                    return <UserResultPreview userId={userId} optionName={optionName} activities={activities} key={idx}/>
                })
            })}   
        </div>
    )
}
