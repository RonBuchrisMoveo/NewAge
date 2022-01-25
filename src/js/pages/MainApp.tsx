
import { Screen } from 'js/cmps/Screen'
import { Login } from 'js/pages/Login'
import React from 'react'
import { Route, useHistory } from 'react-router'
import { ReactComponent as Logo } from 'assets/imgs/logo.svg'
import iai from 'assets/imgs/iai.svg'
import elal from 'assets/imgs/elal.svg'
import poalim from 'assets/imgs/poalim.svg'


export const MainApp = () => {
    const history = useHistory()
    return (
        <div className='main-app'>
            <Screen />
            <div className="main-app-container">
                <div className="who-we-are">
                    <Logo />
                    <p>הוא מיזם הרואה את הערך הייחודי
                        והפרסונלי של אנשים שיצאו לפנסיה
                        ומספק להם שירות חברתי ודיגיטלי,
                        המנגיש, מתאים ומחבר עבורם פעילויות
                        מותאמות אישית המספקות ערך!
                    </p>
                </div>
                <div className="reviews-container">
                    <div className="reviews">
                        <div className="review-container">
                            <img src="https://i.ibb.co/JFYWkwb/woman.jpg" alt="" />
                            <div className="review">
                                <h4 className='name'>גילה</h4>
                                <p> "הגשמתי חלום ללמד פיסול וציור"!
                                </p>
                            </div>
                        </div>
                        <div className="review-container">
                            <img src="https://i.ibb.co/0fWTPP3/man.jpg" alt="" />
                            <div className="review">
                                <h4 className='name'>מושיקו</h4>
                                <p>“בזכות NewMe מצאתי סופסוף עבודה שאני אוהב ואפילו משלמים לי
                                    על זה!”
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="action">
                        <div className="login" onClick={() => history.push('/login')}>
                            יאללה מתחילים!
                        </div>
                    </div>
                </div>
                <div className="collaborations-container">
                    <img src={poalim} alt="" />
                    <img src={iai} alt="" />
                    <img src={elal} alt="" />
                </div>
            </div>
            <Route path="/login" component={Login} />                
        </div>
    )
}
