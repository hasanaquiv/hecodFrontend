import React from 'react';

const SeoService = () => {
    return (
        <>
            <section className="seo_service_area sec_pad">
                <div className="container">
                    <div className="seo_sec_title text-center mb_70 wow fadeInUp" data-wow-delay="0.3s">
                        <h2>How does it work?</h2>
                        <p>The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey<br /> Why gormless, pear shaped.!</p>
                    </div>
                    <div className="row seo_service_info">
                        <div className="col-lg-4 col-md-6">
                            <div className="seo_service_item">
                                <img src={require('../assets/img/seo/icon1.png')} alt="icon1" />
                                <a href="#">
                                    <h4>Digital Analytics</h4>
                                </a>
                                <p>Twit cras excuse my French matie boy grub it's all gone to pot off his nut butty horse play blow off pardon you hanky panky.!</p>
                                <a href="#"><i className="arrow_right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="seo_service_item">
                                <img src={require('../assets/img/seo/icon2.png')} alt="icon2" />
                                <a href="#">
                                    <h4>Digital Marketing</h4>
                                </a>
                                <p>Twit cras excuse my French matie boy grub it's all gone to pot off his nut butty horse play blow off pardon you hanky panky.!</p>
                                <a href="#"><i className="arrow_right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="seo_service_item">
                                <img src={require('../assets/img/seo/icon3.png')} alt="icon3" />
                                <a href="#">
                                    <h4>Email Marketing</h4>
                                </a>
                                <p>Twit cras excuse my French matie boy grub it's all gone to pot off his nut butty horse play blow off pardon you hanky panky.!</p>
                                <a href="#"><i className="arrow_right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center mt_40">
                            <a href="#" className="seo_btn seo_btn_one btn_hover">All Features</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default SeoService;
