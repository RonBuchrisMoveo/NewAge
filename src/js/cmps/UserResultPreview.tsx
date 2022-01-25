import { setActivityToShow } from 'js/store'
import React, { Component } from "react";
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, { Pagination } from 'swiper';
import { IActivityToShow } from 'js/interfaces/activityToShow.interface';
SwiperCore.use([Pagination]);

export const UserResultPreview = (props: { activities: any, userId: string, optionName: string }) => {
    const { activities, userId, optionName } = props
    const options: any = Object.entries(activities)
    const dispatch = useDispatch()
    const history = useHistory()
    const IMG_DIF ='https://ggsc.s3.amazonaws.com/images/made/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner_600_400_int_c1-2x.jpg'


    const onChooseActivity = (optionId: string) => {
        const activityToShow:IActivityToShow ={
            UserId:userId,
            ActivityID:optionId
        }
        dispatch(setActivityToShow(activityToShow))
        history.push('/activity')
    }

    return (
        <div className={optionName}>
            <div className="title-activities">{(optionName === 'matchs' ? 'במיוחד בשבילך!' : (optionName === 'intrest') ? 'אפשרויות נוספות' : 'אולי יעניין אותך גם')}</div>
            <Swiper slidesPerView={2} width={220} spaceBetween={10} watchSlidesProgress={true} pagination={{
                "clickable": true
            }} className="options">
                {options.map((option: any, idx: number) => {
                    const optionName = option[0]
                    const optionDetail = option[1]
                    return (
                        <SwiperSlide key={idx}>
                        <div className={optionName} key={idx} onClick={() => onChooseActivity(optionDetail.ActivityId.toString())}>
                            <img className='activity-img' src={optionDetail.Image ? optionDetail.Image:IMG_DIF} alt="" />
                            <div className="activity-name">{optionDetail.Name1}</div>
                        </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div >
    )
}
