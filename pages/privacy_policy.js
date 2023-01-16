export default function privacy(){
    return (
        <div className="content" dangerouslySetInnerHTML={{__html: `<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Privacy And Policy</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel='stylesheet' href='/stylesheets/privacy.css'/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
            <style>
                .section {
                    margin-bottom: 48px;
                    z-index : 9999;
                }
                .title {
                    margin-top: 24px;
                    font-size: 40px;
                    margin-bottom: 24px;
                    font-family: gilroy-bold, sans-serif;
                    /*font-weight: bold;*/
                }
                .header {
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 24px;
                    font-family: gilroy-bold, sans-serif;
                }
                .small-header {
                    font-size: 22px;
                    font-weight: bold;
                    font-family: gilroy-bold, sans-serif;
                    margin-bottom: 16px;
                }
                .question {
                    font-size: 20px;
                    font-weight: bold;
                    font-family: gilroy-bold, sans-serif;
                }
                .normal {
                    font-size: 18px;
                    margin-bottom: 16px;
                    font-family: gilroy-medium, sans-serif;
                    color: #7279a3;
                }
                .question_answer {
                    margin-bottom: 16px;
                }
                th, td {
                    border: solid 1px #000;
                    padding: 8px;
                }
            </style>
        </head>
        <body style="padding: 0; margin: 0">
        <div style="padding-top: 12px; padding-bottom: 12px; border-bottom: 1px solid #eee; box-sizing: border-box; position: sticky; top: 0; background-color: #fff">
            <div style="height: 64px; display: flex; align-items: center; margin-bottom: 0" class="container">
                <svg width="160px" height="44px" viewBox="0 0 272 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>Group 15</title>
                    <defs>
                        <polygon id="path-1" points="0 44 272 44 272 0 0 0"></polygon>
                    </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Splashscreen-Copy" transform="translate(-71.000000, -384.000000)">
                            <g id="Group-15" transform="translate(71.000000, 384.000000)">
                                <polygon id="Fill-1" fill="#000000" points="98 1 98 7.60012198 86.0251125 7.60012198 86.0251125 43 79.0348599 43 79.0348599 7.60012198 67 7.60012198 67 1"></polygon>
                                <g id="Group-14">
                                    <path d="M100.807461,35.0251743 C102.621483,36.858866 104.89905,37.7751385 107.640736,37.7751385 C110.381274,37.7751385 112.659988,36.858866 114.47401,35.0251743 C116.288032,33.192056 117.195043,30.8847466 117.195043,28.1049663 C117.195043,25.3246126 116.288032,23.01845 114.47401,21.1841849 C112.659988,19.35164 110.381274,18.4342208 107.640736,18.4342208 C104.89905,18.4342208 102.621483,19.35164 100.807461,21.1841849 C98.9934396,23.01845 98.0864288,25.3246126 98.0864288,28.1049663 C98.0864288,30.8847466 98.9934396,33.192056 100.807461,35.0251743 L100.807461,35.0251743 Z M117.195043,12.9950715 L123.72598,12.9950715 L123.72598,43.2142878 L117.195043,43.2142878 L117.195043,38.8628536 C114.735615,42.2882677 111.208541,43.999828 106.612675,43.999828 C102.460275,43.999828 98.911975,42.4591371 95.9694963,39.3766084 C93.0264439,36.2940798 91.5554914,32.537248 91.5554914,28.1049663 C91.5554914,23.6325475 93.0264439,19.8653948 95.9694963,16.8029347 C98.911975,13.741048 102.460275,12.2095313 106.612675,12.2095313 C111.208541,12.2095313 114.735615,13.9015964 117.195043,17.2863 L117.195043,12.9950715 Z" id="Fill-2" fill="#000000"></path>
                                    <path d="M134.610053,21.3355591 C134.610053,22.3430001 135.163668,23.1394347 136.27262,23.7225693 C137.380997,24.3074241 138.731474,24.8108579 140.324623,25.2340175 C141.916625,25.6566037 143.518954,26.15029 145.132183,26.7145028 C146.74369,27.279289 148.104493,28.2356986 149.214018,29.5854516 C150.322396,30.935778 150.876585,32.6375907 150.876585,34.6926098 C150.876585,37.5933748 149.757881,39.8702946 147.520472,41.5222227 C145.283064,43.1747241 142.471388,43.999828 139.08487,43.999828 C136.101085,43.999828 133.54126,43.3754095 131.404822,42.1265726 C129.267237,40.878309 127.715967,39.1455334 126.748718,36.9288192 L132.372645,33.6651003 C133.420785,36.5658652 135.657619,38.0165344 139.08487,38.0165344 C142.510399,38.0165344 144.225172,36.8892555 144.225172,34.6318308 C144.225172,33.6651003 143.670409,32.8795601 142.561458,32.2746367 C141.45308,31.6702868 140.102604,31.1571054 138.510602,30.7339458 C136.916878,30.3107862 135.315124,29.8176734 133.703042,29.2534605 C132.089814,28.6892477 130.72901,27.7523333 129.621206,26.4427173 C128.511681,25.1336748 127.958066,23.4719992 127.958066,21.4565438 C127.958066,18.6761901 129.016533,16.4399807 131.132318,14.7479156 C133.24925,13.0558505 135.880213,12.2095313 139.024058,12.2095313 C141.523645,12.2095313 143.750726,12.7639965 145.706451,13.8712068 C147.661601,14.9801374 149.162386,16.5214017 150.211099,18.4949998 L144.708796,21.5775284 C143.659509,19.28054 141.765744,18.1320458 139.024058,18.1320458 C137.774552,18.1320458 136.726412,18.4044047 135.880213,18.9479756 C135.032866,19.4921198 134.610053,20.2885544 134.610053,21.3355591" id="Fill-4" fill="#000000"></path>
                                    <polygon id="Fill-6" fill="#000000" points="180.568369 43.2144024 172.767272 43.2144024 160.370883 29.2530018 160.370883 43.2144024 153.839946 43.2144024 153.839946 0.907040932 160.370883 0.907040932 160.370883 26.3522369 172.102361 12.9951862 180.084171 12.9951862 166.780771 27.8023326"></polygon>
                                    <mask id="mask-2" fill="white">
                                        <use xlink:href="#path-1"></use>
                                    </mask>
                                    <g id="Clip-9"></g>
                                    <path d="M183.773256,43.2144598 L190.304193,43.2144598 L190.304193,12.9952435 L183.773256,12.9952435 L183.773256,43.2144598 Z M189.970877,7.22295633 C189.144757,8.04978042 188.166608,8.46204569 187.038724,8.46204569 C185.90912,8.46204569 184.931545,8.04978042 184.105998,7.22295633 C183.278731,6.3978524 182.865671,5.42022753 182.865671,4.29180187 C182.865671,3.16394959 183.268405,2.18689811 184.075593,1.36064741 C184.88106,0.534970093 185.868961,0.121558049 187.038724,0.121558049 C188.20734,0.121558049 189.194668,0.534970093 190.001282,1.36064741 C190.807323,2.18689811 191.21063,3.16394959 191.21063,4.29180187 C191.21063,5.42022753 190.79757,6.3978524 189.970877,7.22295633 L189.970877,7.22295633 Z" id="Fill-8" fill="#000000" mask="url(#mask-2)"></path>
                                    <path d="M215.82258,12.9951288 L222.353517,12.9951288 L222.353517,43.2143451 L215.82258,43.2143451 L215.82258,39.3462762 C213.846776,42.4494468 210.721863,43.9998853 206.448987,43.9998853 C202.981578,43.9998853 200.179654,42.892675 198.04379,40.6759607 C195.906204,38.4603933 194.839133,35.4174284 194.839133,31.5493595 L194.839133,12.9951288 L201.37007,12.9951288 L201.37007,30.8848039 C201.37007,33.1422287 201.97417,34.8738575 203.184092,36.0825573 C204.39344,37.2912572 206.04568,37.8961805 208.142533,37.8961805 C210.440179,37.8961805 212.294359,37.1811668 213.706221,35.7505662 C215.116936,34.3199656 215.82258,32.1342143 215.82258,29.1927388 L215.82258,12.9951288 Z" id="Fill-10" fill="#000000" mask="url(#mask-2)"></path>
                                    <path d="M260.570745,12.2094739 C263.997422,12.2094739 266.758613,13.3184044 268.855466,15.5333985 C270.951172,17.7495393 271.999885,20.7311519 271.999885,24.4782361 L271.999885,43.2142304 L265.468948,43.2142304 L265.468948,24.9013957 C265.468948,22.8068129 264.944591,21.1841276 263.897025,20.0356334 C262.848312,18.8877126 261.417518,18.3137522 259.602922,18.3137522 C257.58696,18.3137522 255.984632,18.9783077 254.795937,20.3079922 C253.606095,21.6376767 253.011747,23.6324902 253.011747,26.2918592 L253.011747,43.2142304 L246.48081,43.2142304 L246.48081,24.9013957 C246.48081,22.8068129 245.986859,21.1841276 244.999531,20.0356334 C244.011629,18.8877126 242.610667,18.3137522 240.796646,18.3137522 C238.821416,18.3137522 237.208187,18.9886287 235.959254,20.3383817 C234.709174,21.6887082 234.084421,23.6726273 234.084421,26.2918592 L234.084421,43.2142304 L227.553484,43.2142304 L227.553484,12.9950141 L234.084421,12.9950141 L234.084421,16.6211137 C236.019492,13.6802116 238.901733,12.2094739 242.731717,12.2094739 C246.601859,12.2094739 249.464021,13.8011963 251.318775,16.9840677 C253.334164,13.8011963 256.418345,12.2094739 260.570745,12.2094739" id="Fill-11" fill="#000000" mask="url(#mask-2)"></path>
                                    <g id="Group" mask="url(#mask-2)">
                                        <g transform="translate(-0.000172, 0.000143)">
                                            <path d="M52.0514672,2.56031642 L52.0531882,2.5614632 C55.4689648,5.97540953 55.4689648,11.512608 52.0514672,14.9277011 L29.3503788,37.6177724 C24.8055716,42.159571 17.4381878,42.159571 12.8951017,37.6194926 L4.33271241,29.0616912 C6.7720611,31.4991595 10.7259631,31.4991595 13.1653118,29.0616912 L39.6791732,2.5614632 C43.0960972,-0.853629913 48.6362643,-0.853629913 52.0514672,2.56031642" id="Fill-12" fill="#0076FF"></path>
                                            <path d="M14.9344132,14.9245475 L21.1217076,21.1085265 L13.1651396,29.0614046 C10.725791,31.4988728 6.77188899,31.4988728 4.333114,29.0614046 L2.56211931,27.2907854 C-0.854230978,23.8768391 -0.854230978,18.340214 2.5632667,14.9245475 C4.27172869,13.2170009 6.50856325,12.3649478 8.74883997,12.3632277 C10.9873956,12.3632277 13.2270986,13.2187211 14.9344132,14.9245475" id="Fill-13" fill="#76C8FF"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
        <div class="container">
            <div class="title">
                Privacy Notice
            </div>
            <div class="section">
                <div class="header">Last updated September 01, 2022</div>
                <div class="normal">This privacy notice for PixiumLabs ("Company," "we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you: </div>
                <ul>
                    <li class="normal">Download and use our mobile application (Taskium), or any other application of ours that links to this privacy notice </li>
                    <li class="normal">Engage with us in other related ways, including any sales, marketing, or events </li>
                </ul>
                <span class="question">Questions or concerns? </span>
                <span class="normal">Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at hello@pixiumlabs.com. </span>
            </div>
            <div class="section">
                <div class="header">SUMMARY OF KEY POINTS</div>
                <div class="question_answer">
                    <span class="question">What personal information do we process? </span>
                    <span class="normal">When you visit, use, or navigate our Services, we may process personal information depending on how you interact with PixiumLabs and the Services, the choices you make, and the products and features you use. </span>
                </div>
                <div class="question_answer">
                    <span class="question">Do we process any sensitive personal information? </span>
                    <span class="normal">We do not process sensitive personal information.</span>
                </div>
                <div class="question_answer">
                    <span class="question">Do we receive any information from third parties? </span>
                    <span class="normal">We do not receive any information from third parties.</span>
                </div>
                <div class="question_answer">
                    <span class="question">How do we process your information? </span>
                    <span class="normal">We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.  </span>
                </div>
                <div class="question_answer">
                    <span class="question">In what situations and with which types of parties do we share personal information? </span>
                    <span class="normal">We may share information in specific situations and with specific categories of third parties.</span>
                </div>
                <div class="question_answer">
                    <span class="question">What are your rights? </span>
                    <span class="normal">Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</span>
                </div>
                <div class="question_answer">
                    <span class="question">How do you exercise your rights? </span>
                    <span class="normal">The easiest way to exercise your rights is by contacting us. We will consider and act upon any request in accordance with applicable data protection laws. </span>
                </div>
            </div>
            <div class="section">
                <div class="header">TABLE OF CONTENTS </div>
                <ol class="normal">
                    <li>WHAT INFORMATION DO WE COLLECT?</li>
                    <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
                    <li> WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</li>
                    <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
                    <li>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li>
                    <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
                    <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
                    <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
                    <li>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
                    <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
                    <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
                    <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
                </ol>
            </div>
            <div class="section">
                <div class="header">1. WHAT INFORMATION DO WE COLLECT? </div>
                <div class="small-header">Personal information you disclose to us</div>
                <div class="question_answer fst-italic">
                    <span class="question">In Short: </span>
                    <span class="normal">We collect personal information that you provide to us.</span>
                </div>
                <div class="question_answer">
                    <span class="normal">We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us. </span>
                </div>
                <div class="question_answer">
                    <span class="question">Personal Information Provided by You. </span>
                    <span class="normal">The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</span>
                </div>
                <ul class="normal">
                    <li class="normal">names</li>
                    <li class="normal">email addresses</li>
                </ul>
                <div class="question_answer">
                    <span class="question">Sensitive Information. </span>
                    <span class="normal"> We do not process sensitive information.</span>
                </div>
                <div class="question_answer">
                    <span class="question">Social Media Login Data. </span>
                    <span class="normal"> We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter, or other social media account. If you choose to register in this way, we will collect the information described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.</span>
                </div>
                <div class="question_answer">
                    <span class="question">Application Data. </span>
                    <span class="normal"> If you use our application(s), we also may collect the following information if you choose to provide us with access or permission: </span>
                </div>
                <ul class="question_answer">
                    <li class="normal">Mobile Device Data. We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device’s operating system or platform, the type of mobile device you use, your mobile device’s unique device ID, and information about the features of our application(s) you accessed. </li>
                    <li class="normal">Push Notifications. We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings. </li>
                </ul>
                <div class="question_answer">
                    <span class="normal">This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.</span>
                </div>
                <div class="question_answer">
                    <span class="normal">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information. </span>
                </div>
                <div class="small-header">Information automatically collected </div>
                <div class="question_answer fst-italic">
                    <span class="question">In Short: </span>
                    <span class="normal"> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services. </span>
                </div>
                <div class="question_answer">
                    <span class="normal">We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes. </span>
                </div>
                <div class="question_answer">
                    <span class="normal">The information we collect includes: </span>
                </div>
                <ul class="question_answer">
                    <li class="normal">Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings). </li>
                    <li class="normal">Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information. </li>
                    <li class="normal">Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services. </li>
                </ul>
            </div>
            <div class="section">
                <div class="header">2. HOW DO WE PROCESS YOUR INFORMATION? </div>
                <div class="question_answer fst-italic">
                    <span class="question">In Short: </span>
                    <span class="normal">We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</span>
                </div>
                <div class="question_answer">
                    <span class="normal">We process your personal information for a variety of reasons, depending on how you interact with our Services, including: </span>
                </div>
                <ul class="normal">
                    <li class="normal">To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order. </li>
                    <li class="normal">To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm. </li>
                </ul>
            </div>
            <div class="section">
                <div class="header">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION? </div>
                <div class="question_answer fst-italic">
                    <span class="question">In Short: </span>
                    <span class="normal">We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests. </span>
                </div>
                <div class="question_answer">
                    <span class="normal">If you are located in the EU or UK, this section applies to you. </span>
                </div>
                <div class="question_answer">
                    <span class="normal">The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information: </span>
                </div>
                <ul class="normal">
                    <li class="normal">Consent. We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.  </li>
                    <li class="normal">Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
                    <li class="normal">Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person. </li>
                </ul>
                <div class="question_answer">
                    <span class="normal">If you are located in Canada, this section applies to you. </span>
                </div>
                <div class="question_answer">
                    <span class="normal">We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.  </span>
                </div>
                <div class="question_answer">
                    <span class="normal">In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example: </span>
                </div>
                <ul class="normal">
                    <li class="normal">If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way </li>
                    <li class="normal">For investigations and fraud detection and prevention </li>
                    <li class="normal">For business transactions provided certain conditions are met </li>
                    <li class="normal">If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim </li>
                    <li class="normal">For identifying injured, ill, or deceased persons and communicating with next of kin </li>
                    <li class="normal">If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse </li>
                    <li class="normal">If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province </li>
                    <li class="normal">If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records </li>
                    <li class="normal">If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced </li>
                    <li class="normal">If the collection is solely for journalistic, artistic, or literary purposes </li>
                    <li class="normal">If the information is publicly available and is specified by the regulations </li>
                </ul>
            </div>
            <div class="section">
                <div class="header">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION? </div>
                <div class="question_answer fst-italic">
                    <span class="question">In Short: </span>
                    <span class="normal">We may share information in specific situations described in this section and/or with the following categories of third parties. </span>
                </div>
                <div class="question_answer">
                    <span class="question">Vendors, Consultants, and Other Third-Party Service Providers.</span>
                    <span class="normal">We may share your data with third-party vendors, service providers, contractors, or agents ("third parties") who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct. The categories of third parties we may share personal information with are as follows: </span>
                </div>
                <div class="question_answer">
                    <span class="normal">We also may need to share your personal information in the following situations: </span>
                </div>
                <ul>
                    <li class="question_answer">
                        <span class="question">Business Transfers. </span>
                        <span class="normal">We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company. </span>
                    </li>
                    <li class="question_answer">
                        <span class="question">Affiliates. </span>
                        <span class="normal">We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us. </span>
                    </li>
                    <li class="question_answer">
                        <span class="question">Business Partners. </span>
                        <span class="normal">We may share your information with our business partners to offer you certain products, services, or promotions. </span>
                    </li>
                </ul>
            </div>
            <div class="section">
                <div class="header">5. HOW DO WE HANDLE YOUR SOCIAL LOGINS? </div>
                <div class="question_answer fst-italic">
                    <span class="question">In Short: </span>
                    <span class="normal">If you choose to register or log in to our services using a social media account, we may have access to certain information about you. </span>
                </div>
                <div class="question_answer">
                    <span class="normal">Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform. </span>
                </div>
                <div class="question_answer">
                    <span class="normal">We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps. </span>
                </div>
            </div>
            <div class="section">
                <div class="header">6. HOW LONG DO WE KEEP YOUR INFORMATION? </div>
                <div class="question_answer fst-italic">
                    <span class="question">In Short: </span>
                    <span class="normal"> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law. </span>
                </div>
                <div class="question_answer">
                    <span class="normal">We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than . </span>
                </div>
                <div class="question_answer">
                    <span class="normal">When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible. </span>
                </div>
            </div>
            <div class="section">
                <div class="header">7. WHAT ARE YOUR PRIVACY RIGHTS? </div>
                <div class="question_answer fst-italic">
                    <span class="question">In Short: </span>
                    <span class="normal">In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time. </span>
                </div>
                <div class="question_answer">
                    <span class="normal">In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. </span>
                </div>
                <div class="question_answer">
                    <span class="normal">We will consider and act upon any request in accordance with applicable data protection laws. </span>
                </div>
                <div class="question_answer">
                    <span class="normal">If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.</a></span>
                </div>
                <div class="question_answer">
                    <span class="normal">If you are located in Switzerland, the contact details for the data protection authorities are available here: </span>
                    <a href="https://www.edoeb.admin.ch/edoeb/en/home.html">https://www.edoeb.admin.ch/edoeb/en/home.html.</a>
                </div>
                <div class="question_answer">
                    <span class="question">Withdrawing your consent: </span>
                    <span class="normal">If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. </span>
                </div>
                <div class="question_answer">
                    <span class="normal">However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent. </span>
                </div>
                <div class="small-header">Account Information</div>
                <div class="question_answer">
                    <span class="normal">If you would at any time like to review or change the information in your account or terminate your account, you can: </span>
                </div>
                <ul>
                    <li class="question_answer">
                        <span class="normal">Contact us using the contact information provided. </span>
                    </li>
                </ul>
                <div class="question_answer">
                    <span class="normal">Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements. </span>
                </div>
                <div class="question_answer">
                    <span class="normal">If you have questions or comments about your privacy rights, you may email us at legal@pixiumlabs.co. </span>
                </div>
            </div>
            <div class="section">
                <div class="header">8. CONTROLS FOR DO-NOT-TRACK FEATURES </div>
                <div class="question_answer">
                    <span class="normal">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice. </span>
                </div>
            </div>
            <div class="section">
                <div class="header">9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS? </div>
                <div class="question_answer fst-italic">
                    <span class="question">In Short: </span>
                    <span class="normal"> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</span>
                </div>
                <div class="question_answer">
                    <span class="normal">California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</span>
                </div>
                <div class="question_answer">
                    <span class="normal">If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.). </span>
                </div>
                <div class="small-header">CCPA Privacy Notice</div>
                <div class="question_answer">
                    <span class="normal">The California Code of Regulations defines a "resident" as: </span>
                </div>
                <div class="question_answer">
                    <span class="normal">(1) every individual who is in the State of California for other than a temporary or transitory purpose and </span>
                    <div>
                        <span class="normal">(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose </span>
                    </div>
                </div>
                <div class="question_answer">
                    <span class="normal">All other individuals are defined as "non-residents." </span>
                </div>
                <div class="question_answer">
                    <span class="normal">If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information. </span>
                </div>
                <div class="small-header">What categories of personal information do we collect? </div>
                <div class="question_answer">
                    <span class="normal">We have collected the following categories of personal information in the past twelve (12) months: </span>
                </div>
                <table class="question_answer" style="width: 100%">
                    <tr style="width: 100%">
                        <th class="question">Category </th>
                        <th class="question">Examples</th>
                        <th class="question">Collected</th>
                    </tr>
                    <tr class="normal">
                        <td>A. Identifiers </td>
                        <td>Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                        <td>YES </td>
                    </tr>
                    <tr class="normal">
                        <td>B. Personal information categories listed in the California Customer Records statute </td>
                        <td>Name, contact information, education, employment, employment history, and financial information </td>
                        <td>YES</td>
                    </tr>
                    <tr class="normal">
                        <td>C. Protected classification characteristics under California or federal law </td>
                        <td>Gender and date of birth</td>
                        <td>NO</td>
                    </tr>
                    <tr class="normal">
                        <td>D. Commercial information </td>
                        <td>Transaction information, purchase history, financial details, and payment information </td>
                        <td>NO</td>
                    </tr>
                    <tr class="normal">
                        <td>E. Biometric information </td>
                        <td>Fingerprints and voiceprints </td>
                        <td>NO</td>
                    </tr>
                    <tr class="normal">
                        <td>F. Internet or other similar network activity </td>
                        <td>Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                        <td>NO</td>
                    </tr>
                    <tr class="normal">
                        <td>G. Geolocation data </td>
                        <td>Device location</td>
                        <td>NO</td>
                    </tr>
                    <tr class="normal">
                        <td>H. Audio, electronic, visual, thermal, olfactory, or similar information </td>
                        <td>Images and audio, video or call recordings created in connection with our business activities</td>
                        <td>NO</td>
                    </tr>
                    <tr class="normal">
                        <td>I. Professional or employment-related information </td>
                        <td>Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us </td>
                        <td>NO</td>
                    </tr>
                    <tr class="normal">
                        <td>J. Education Information </td>
                        <td>Student records and directory information </td>
                        <td>NO</td>
                    </tr>
                    <tr class="normal">
                        <td>K. Inferences drawn from other personal information </td>
                        <td>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</td>
                        <td>NO</td>
                    </tr>
                </table>
                <div class="question_answer">
                    <span class="normal">We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of: </span>
                </div>
                <ul>
                    <li class="question_answer">
                        <span class="normal">Receiving help through our customer support channels; </span>
                    </li>
                    <li class="question_answer">
                        <span class="normal">Participation in customer surveys or contests; and </span>
                    </li>
                    <li class="question_answer">
                        <span class="normal">Facilitation in the delivery of our Services and to respond to your inquiries. </span>
                    </li>
                </ul>
                <div class="small-header">How do we use and share your personal information? </div>
                <div class="question_answer">
                    <span class="normal">More information about our data collection and sharing practices can be found in this privacy notice. </span>
                </div>
                <div class="question_answer">
                    <span class="normal">You may contact us by email at legal@pixiumlabs.com, or by referring to the contact details at the bottom of this document. </span>
                </div>
                <div class="question_answer">
                    <span class="normal">If you are using an authorized agent to exercise your right to opt out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf. </span>
                </div>
                <div class="small-header">Will your information be shared with anyone else? </div>
                <div class="question_answer">
                    <span class="normal">We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf. </span>
                </div>
                <div class="question_answer">
                    <span class="normal">We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information. </span>
                </div>
                <div class="question_answer">
                    <span class="normal">PixiumLabs has not sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. PixiumLabs has disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months: </span>
                    <div>
                        <span class="normal">The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?". </span>
                    </div>
                </div>
                <div class="small-header">Your rights with respect to your personal data</div>
                <div class="question_answer">
                    <span class="normal text-decoration-underline">Right to request deletion of the data — Request to delete</span>
                </div>
                <div class="question_answer">
                    <span class="normal">You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities. </span>
                </div>
                <div class="question_answer">
                    <span class="normal text-decoration-underline">Right to be informed — Request to know</span>
                </div>
                <div class="question_answer">
                    <span class="normal">Depending on the circumstances, you have a right to know: </span>
                </div>
                <ul>
                    <li class="question_answer">
                        <span class="normal">whether we collect and use your personal information;  </span>
                    </li>
                    <li class="question_answer">
                        <span class="normal">the categories of personal information that we collect; </span>
                    </li>
                    <li class="question_answer">
                        <span class="normal">the purposes for which the collected personal information is used; </span>
                    </li>
                    <li class="question_answer">
                        <span class="normal">whether we sell your personal information to third parties; </span>
                    </li>
                    <li class="question_answer">
                        <span class="normal">the categories of personal information that we sold or disclosed for a business purpose; </span>
                    </li>
                    <li class="question_answer">
                        <span class="normal">the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and </span>
                    </li>
                    <li class="question_answer">
                        <span class="normal">the business or commercial purpose for collecting or selling personal information. </span>
                    </li>
                </ul>
                <div class="question_answer">
                    <span class="normal">In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.  </span>
                </div>
                <div class="question_answer">
                    <span class="normal text-decoration-underline">Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights </span>
                </div>
                <div class="question_answer">
                    <span class="normal">We will not discriminate against you if you exercise your privacy rights. </span>
                </div>
                <div class="question_answer">
                    <span class="normal text-decoration-underline">Verification process </span>
                </div>
                <div class="question_answer">
                    <span class="normal">Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate. </span>
                </div>
                <div class="question_answer">
                    <span class="normal">We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you. </span>
                </div>
                <div class="question_answer">
                    <span class="normal text-decoration-underline">Other privacy rights</span>
                </div>
                <ul>
                    <li class="question_answer">
                        <span class="normal">You may object to the processing of your personal information. </span>
                    </li>
                    <li class="question_answer">
                        <span class="normal">You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information. </span>
                    </li>
                    <li class="question_answer">
                        <span class="normal">You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA. </span>
                    </li>
                    <li class="question_answer">
                        <span class="normal">You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission. </span>
                    </li>
                </ul>
                <div class="question_answer">
                    <span class="normal">To exercise these rights, you can contact us by email at legal@pixiumlabs.com, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you. </span>
                </div>
            </div>
            <div class="section">
                <div class="header">10. DO WE MAKE UPDATES TO THIS NOTICE? </div>
                <div class="question_answer fst-italic">
                    <span class="question">In Short: </span>
                    <span class="normal"> Yes, we will update this notice as necessary to stay compliant with relevant laws. </span>
                </div>
                <div class="question_answer">
                    <span class="normal">We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information. </span>
                </div>
            </div>
            <div class="section">
                <div class="header">11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE? </div>
                <div class="question_answer">
                    <span class="normal">If you have questions or comments about this notice, you may email us at legal@pixiumlabs.com. </span>
                </div>
            </div>
            <div class="section">
                <div class="header">12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU? </div>
                <div class="question_answer">
                    <span class="normal">You have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please email us at: legal@pixiumlabs.com </span>
                </div>
            </div>
        </div>
        </body>
        </html>
        `}}></div>
    );
}