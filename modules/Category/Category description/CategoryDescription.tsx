import React from 'react'
import { Row, Col, Button } from "react-bootstrap";
import styles from "./category-description.module.css";


export default function CategoryDescription() {
    return (
        <>
        <Row >
            <Col xs={12} className={styles["category-description"]}>
                <div className={styles["category-description__description"]}>
                    <div className={styles["category-description__img"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2.125rem" viewBox="0 0 26.568 27">
                        <g id="art" transform="translate(-885.946 52.843)">
                            <g id="noun_pen_tool_3809451" data-name="noun pen tool 3809451" transform="translate(891.194 -49.543)">
                            <g id="Layer_2" data-name="Layer 2">
                                <path id="Path_15109" data-name="Path 15109" d="M908.574-38.609a.53.53,0,0,0-.09-.471l-7.937-10.2,0,8.9a2.829,2.829,0,0,1,2.252,3.308,2.829,2.829,0,0,1-3.308,2.251,2.828,2.828,0,0,1-2.251-3.308,2.828,2.828,0,0,1,2.251-2.251l0-8.9-7.936,10.2a.53.53,0,0,0-.091.471l2.19,7.658,12.727,0Z" transform="translate(-891.45 49.284)" fill="#fff"/>
                                <path id="Path_15110" data-name="Path 15110" d="M893.2-24.417l13.792,0a.528.528,0,0,0,.526-.53.552.552,0,0,0-.016-.13l-.915-3.654h-13l-.913,3.653a.528.528,0,0,0,.38.643.547.547,0,0,0,.13.016Z" transform="translate(-891.519 48.117)" fill="#fff"/>
                            </g>
                            </g>
                            <path id="Polygon_128" data-name="Polygon 128" d="M889.3-45.843l.707,1.651,1.651.707-1.651.707-.707,1.651-.707-1.651-1.651-.707,1.651-.707Z" transform="translate(-1 -0.454)" fill="#fff"/>
                            <path id="Polygon_130" data-name="Polygon 130" d="M890.861-30.573l.424.99.99.424-.99.424-.424.99-.424-.99-.99-.424.99-.424Z" transform="translate(-0.142 -1.322)" fill="#fff"/>
                            <path id="Polygon_129" data-name="Polygon 129" d="M909.827-53.843l1.132,2.641L913.6-50.07l-2.641,1.132L909.827-46.3,908.7-48.938l-2.641-1.132L908.7-51.2Z" transform="translate(-1.085 1)" fill="#fff"/>
                        </g>
                    </svg>

                    </div>
                    <div className={styles["category-description__info"]}>
                        <div> تخصص </div>
                        <div> الفنون </div>
                        <div>
                            <span> 6 </span>
                            مواضيع
                            -
                            <span> 48 </span>
                            دورة
                        </div>
                    </div>
                </div>
                <p className={styles["category-description__brief"]}>
                تقدم لك منصة تدرب الإلكترونية دورة أسراري في التربية، بإِشراف الأستاذة عفاف محمد الجاسم، وهي المؤسس والرئيس التنفيذي لشركة إنسان للاستشارات والتدريب، خبرة أكثر من 30 عاماً في مجال الاستشارات الاجتماعية
                </p>
            </Col>
        </Row>
            
        </>
    )
}
