import { Screen } from 'js/cmps/Screen'
import { Login } from 'js/pages/Login'
import React from 'react'
import { Route } from 'react-router'

export const MainApp = () => {
    return (
        <div className='main-app'>
            <Screen/>
            <div className="main-app-container">

            <div className="who-we-are">
                <p><span>NewMe</span> הוא מיזם הרואה את הערך הייחודי והפרסונלי של אנשים שיצאו לפנסיה ומספק להם שירות חברתי ודיגיטלי, המנגיש, מתאים ומחבר עבורם פעילויות מותאמות אישית המספקות ערך!
                </p>
            </div>
            <div className="collaborations-container">
                <img src="https://www.reali.co.il/wp-content/uploads/2017/03/%D7%91%D7%A0%D7%A7-%D7%94%D7%A4%D7%95%D7%A2%D7%9C%D7%99%D7%9D.jpg" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/he/c/cf/Israel_Air_Industry.svg" alt="" />
                <img src="https://images.studentuniverse.com/new/suwebui/partnerlogos/elalisrael_partner.svg" alt="" />
            </div>
            <div className="reviews-container">
                <div className="review-container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/122-old-man-2.svg" alt="" />
                    <div className="review">
                        <p>בוריס "מי היה מאמין שאני ארקוד סלסה??
                        </p>
                    </div>
                </div>
                <div className="review-container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/122-old-man-2.svg" alt="" />
                    <div className="review">
                        <p>גילה "הגשמתי חלום ללמד פיסול וציור"!
                        </p>
                    </div>
                </div>
                <div className="review-container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/122-old-man-2.svg" alt="" />
                    <div className="review">
                        <p>מושיקו "בזכות NewMee  מצאתי סופסוף עבודה שאני אוהב ואפילו משלמים לי על זה!"
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <Route path="/login" component={Login} />
        </div>
    )
}
