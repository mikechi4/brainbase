import React from 'react';

const Logo = (props) => {
    return(
        <a href="https://www.brainbase.com" aria-label="Visit Brainbase Home page">
            <svg viewBox="0 0 135 21" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Brainbase" className="logo-img">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M46.483 0C45.4172 0 44.5536 0.850451 44.5536 1.89994C44.5536 2.94901 45.4172 3.79946 46.483 3.79946C47.5484 3.79946 48.412 2.94901 48.412 1.89994C48.412 0.850451 47.5484 0 46.483 0ZM3.1112 15.3523C3.86373 17.036 5.52148 18.1812 7.45049 18.1812C10.0857 18.1812 12.1945 16.0481 12.1945 13.3163C12.1945 10.5848 10.0857 8.36003 7.45049 8.36003C5.52104 8.36003 3.86329 9.55429 3.1112 11.2647V15.3523ZM3.11074 7.31529C4.4001 6.20634 6.05567 5.53899 7.8613 5.53899C11.9726 5.53899 15.3056 8.99336 15.3056 13.2551C15.3056 17.5168 11.9726 20.9712 7.8613 20.9712C6.05129 20.9712 4.39267 20.3004 3.10243 19.1867L2.54328 20.661H0V1.80502H3.11074V7.31529ZM29.4249 13.194C29.4249 15.9255 31.5333 18.1502 34.1689 18.1502C36.0979 18.1502 37.7557 16.9564 38.5077 15.246V11.1579C37.7557 9.47383 36.0979 8.32913 34.1689 8.32913C31.5333 8.32913 29.4249 10.4621 29.4249 13.194ZM33.758 5.53909C35.5672 5.53909 37.2245 6.20902 38.5147 7.32099L38.9404 5.84411H41.6189V20.662H39.0761L38.5169 19.1868C37.2267 20.3005 35.5681 20.9713 33.758 20.9713C29.6467 20.9713 26.3137 17.5165 26.3137 13.2552C26.3137 8.99389 29.6467 5.53909 33.758 5.53909ZM94.0502 18.1736C91.415 18.1736 89.3062 16.035 89.3062 13.2958C89.3062 10.5566 91.415 8.3262 94.0502 8.3262C95.9792 8.3262 97.6369 9.52347 98.3894 11.2377V15.3375C97.6369 17.0254 95.9792 18.1736 94.0502 18.1736ZM98.3999 7.28835C97.1092 6.17078 95.4506 5.4974 93.6393 5.4974C89.528 5.4974 86.195 8.96125 86.195 13.2342C86.195 17.5071 89.528 20.9714 93.6393 20.9714C95.4515 20.9714 97.111 20.2971 98.4017 19.1787L98.9573 20.6435H101.5V5.82569H98.8217L98.3999 7.28835ZM48.0375 20.6614H44.9264V5.84481H48.0375V20.6614ZM107.814 10.0269C107.814 8.91618 109.138 8.34878 110.848 8.34878C113.062 8.34878 114.857 9.47755 114.857 9.47755L116.734 7.12524C116.734 7.12524 114.464 5.53204 111.037 5.53204C107.212 5.53204 104.381 7.54486 104.381 9.95318C104.381 13.3229 107.85 14.0951 110.676 14.7244C112.62 15.1571 114.26 15.5223 114.26 16.6181C114.26 17.7895 112.665 18.2014 110.968 18.2014C108.289 18.2014 106.017 16.3802 106.017 16.3802L104.299 18.5176C104.299 18.5176 106.549 21 111.118 21C115.013 21 117.588 18.7864 117.588 16.6004C117.588 13.3311 114.144 12.5362 111.344 11.8902C109.428 11.448 107.814 11.0755 107.814 10.0269ZM17.6143 5.84562H19.8881L20.5986 7.5224C21.905 6.29842 23.607 5.5393 25.4743 5.5393V8.58783C23.2491 8.58783 21.4981 9.78122 20.7246 11.5011V20.6613H17.6143V5.84562ZM71.7508 15.3523C72.5033 17.036 74.1607 18.1812 76.0897 18.1812C78.7253 18.1812 80.8341 16.0481 80.8341 13.3163C80.8341 10.5848 78.7253 8.36003 76.0897 8.36003C74.1607 8.36003 72.5029 9.55429 71.7504 11.2647L71.7508 15.3523ZM71.7504 7.31529C73.0393 6.20634 74.6949 5.53899 76.5005 5.53899C80.6123 5.53899 83.9453 8.99336 83.9453 13.2551C83.9453 17.5168 80.6123 20.9712 76.5005 20.9712C74.6905 20.9712 73.0323 20.3004 71.7417 19.1867L71.1829 20.661H68.6397V1.80502H71.7504V7.31529ZM59.341 5.53177C56.6835 5.53177 54.7598 7.09265 54.4574 7.34468L54.0252 5.84411H51.3467V20.662H53.8895H54.4574V11.5035L54.4609 11.5263L54.4649 11.469C54.4649 11.469 55.7346 8.4868 58.8965 8.4868C61.0793 8.4868 62.1945 9.93266 62.1945 12.1092C62.1945 14.1317 62.1792 18.748 62.175 20.0237L62.1739 20.3552L62.1726 20.6615H65.2711V11.8442C65.2711 7.65574 62.8223 5.53177 59.341 5.53177ZM131.272 10.0785C130.315 8.99196 128.879 8.29488 127.265 8.29488C124.379 8.29488 122.326 10.5067 122.326 13.2347C122.326 13.7259 122.394 14.1998 122.52 14.6478L131.272 10.0785ZM123.876 16.8787C124.738 17.6813 125.907 18.175 127.265 18.175C129.155 18.175 130.809 17.2263 131.727 15.8059L133.993 17.484C132.554 19.5847 130.079 20.9715 127.265 20.9715C122.819 20.9715 119.214 17.5077 119.214 13.2347C119.214 8.96179 122.819 5.49838 127.265 5.49838C129.809 5.49838 132.078 6.63275 133.553 8.40344C133.553 8.40344 134.656 9.76528 135 11.0948L134.964 11.0896L123.876 16.8787Z" fill={props.fill ? props.fill : '#0A1522'}/>
            </svg>     
        </a>        
    )
} ;

export default Logo;