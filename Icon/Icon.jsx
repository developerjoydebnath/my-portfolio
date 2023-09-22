export const Icon = ({ icon = '', className = '' }) => {
    switch (icon) {
        case 'dark':
            return (
                <svg
                    className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 96 960 960"
                    width="48"
                >
                    <path d="M480 936q-150 0-255-105T120 576q0-135 79.5-229T408 226q41-8 56 14t-1 60q-9 23-14 47t-5 49q0 90 63 153t153 63q25 0 48.5-4.5T754 595q43-16 64 1.5t11 59.5q-27 121-121 200.5T480 936Zm0-60q109 0 190-67.5T771 650q-25 11-53.667 16.5Q688.667 672 660 672q-114.689 0-195.345-80.655Q384 510.689 384 396q0-24 5-51.5t18-62.5q-98 27-162.5 109.5T180 576q0 125 87.5 212.5T480 876Zm-4-297Z" />
                </svg>
            );
        case 'light':
            return (
                <svg
                    className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 96 960 960"
                    width="48"
                >
                    <path d="M479.825 246Q467 246 458.5 237.375T450 216v-50q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510 166v50q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Zm0 770q-12.825 0-21.325-8.62-8.5-8.63-8.5-21.38v-50q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510 936v50q0 12.75-8.675 21.38-8.676 8.62-21.5 8.62ZM840 606q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T840 546h50q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T890 606h-50Zm-770 0q-12.75 0-21.375-8.675Q40 588.649 40 575.825 40 563 48.625 554.5T70 546h50q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T120 606H70Zm651-272q-9-8.698-9-21.349T721 291l23-23q8-8 21-8.5t22 8.5q9 9 9 21.5t-9 21.5l-24 24q-8.25 8-20.625 8T721 334ZM174 883q-9-9-9-21.5t9-21.5l23-23q8-8 21-8.5t22.391 8.714Q249 825.661 249 838.33q0 12.67-9 21.67l-24 24q-8.067 8-20.533 8Q183 892 174 883Zm570 0-24-23q-8-8-8.5-21t8.714-22.391Q728.661 808 741.33 808q12.67 0 21.67 9l24 24q8 8 8.5 20.5T787 883q-9 9-21.5 9t-21.5-9ZM197 334l-24-23q-8-8-8.5-21t8.5-22q9-9 21.5-9t21.5 9l24 24q8 8 8.5 20.5T240 334q-8.698 9-21.349 9T197 334Zm282.824 467Q386 801 320.5 735.324 255 669.647 255 575.823 255 482 320.676 416.5q65.677-65.5 159.5-65.5Q574 351 639.5 416.677q65.5 65.676 65.5 159.5Q705 670 639.323 735.5 573.647 801 479.824 801Zm.11-60Q549 741 597 693.066t48-117Q645 507 597.066 459t-117-48Q411 411 363 458.934t-48 117Q315 645 362.934 693t117 48ZM480 576Z" />
                </svg>
            );
        case 'facebook':
            return (
                <svg
                    className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                >
                    <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005 C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21 c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996 C17.465,9.521,17.001,9,16.403,9z"></path>
                </svg>
            );
        case 'twitter':
            return (
                <svg
                    className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                >
                    <path d="M21.634,4.031c-0.815,0.385-2.202,1.107-2.899,1.245c-0.027,0.007-0.049,0.016-0.075,0.023 c-0.813-0.802-1.927-1.299-3.16-1.299c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.218,0-5.568-1.679-7.327-3.837 C3.438,4.873,3.188,5.024,3.136,5.23C3.019,5.696,2.979,6.475,2.979,7.031c0,1.401,1.095,2.777,2.8,3.63 c-0.314,0.081-0.66,0.139-1.02,0.139c-0.424,0-0.912-0.111-1.339-0.335c-0.158-0.083-0.499-0.06-0.398,0.344 c0.405,1.619,2.253,2.756,3.904,3.087c-0.375,0.221-1.175,0.176-1.543,0.176c-0.136,0-0.609-0.032-0.915-0.07 c-0.279-0.034-0.708,0.038-0.349,0.582c0.771,1.167,2.515,1.9,4.016,1.928c-1.382,1.084-3.642,1.48-5.807,1.48 c-0.438-0.01-0.416,0.489-0.063,0.674C3.862,19.504,6.478,20,8.347,20C15.777,20,20,14.337,20,8.999 c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.589-0.425,1.491-1.163,1.947-1.728c0.155-0.192,0.03-0.425-0.181-0.352 c-0.543,0.189-1.482,0.555-2.07,0.625c1.177-0.779,1.759-1.457,2.259-2.21C22.109,4.168,21.895,3.907,21.634,4.031z"></path>
                </svg>
            );
        case 'github':
            return (
                <svg
                    className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                >
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                </svg>
            );
        default:
            return;
    }
};
