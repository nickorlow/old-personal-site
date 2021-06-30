import React from "react";
import './SocialBar.css';

export default function SocialBar(props: {style: any}) {
    return (
        <div className={"row"} style={props.style}>
            <div className={"col-md-2 col-4 fade-up-3 fade-up-md-2"} style={{display: "flex", justifyContent: "center"}}>
                <svg onClick={ () => window.location.href="https://instagram.com/nickorlow"} className={"insta-icon icon"} viewBox="0 0 50 50" width="100px" height="100px">    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"/></svg>
            </div>

            <div className={"col-md-2 col-4 fade-up-2 fade-up-md"} style={{display: "flex", justifyContent: "center"}}>
                <svg onClick={ () => window.location.href="https://twitter.com/nickorIow"} className={"twitter-icon icon"}  viewBox="0 0 50 50" width="100px" height="100px"><path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"/></svg>
            </div>

            <div className={"col-md-2 col-4 fade-up fade-up-md-2"} style={{display: "flex", justifyContent: "center"}}>
                <svg onClick={ () => window.location.href="https://github.com/nickorlow"} className={"github-icon icon"} viewBox="0 0 50 50" width="100px" height="100px">    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"/></svg>
            </div>

            <div className={"col-md-2 col-4 fade-up-2 fade-up-md-3"} style={{display: "flex", justifyContent: "center"}}>
                    <svg onClick={ () => window.location.href="https://www.linkedin.com/in/nicholas-orlowsky-83b24ab8"} className={"linkedin-icon icon"}  viewBox="0 0 50 50" width="100px" height="100px">    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/></svg>
            </div>

            <div className={"col-md-2 col-4 fade-up-3 fade-up-md-3"} style={{display: "flex", justifyContent: "center"}}>
                <svg onClick={ () => window.location.href="mailto:nickorlow@nickorlow.com"} className={"mail-icon icon"} viewBox="0 0 100 100" width="100px" height="100px"><g id="surface12014155"><path  d="M 28 8 C 16.976562 8 8 16.976562 8 28 L 8 72 C 8 83.023438 16.976562 92 28 92 L 72 92 C 83.023438 92 92 83.023438 92 72 L 92 28 C 92 16.976562 83.023438 8 72 8 Z M 26 32 L 74 32 C 74.359375 32 74.699219 32.039062 75.019531 32.140625 L 55.359375 51.78125 C 52.398438 54.742188 47.582031 54.742188 44.621094 51.78125 L 24.980469 32.140625 C 25.300781 32.039062 25.640625 32 26 32 Z M 22.140625 34.980469 L 37.179688 50 L 22.140625 65.019531 C 22.039062 64.699219 22 64.359375 22 64 L 22 36 C 22 35.640625 22.039062 35.300781 22.140625 34.980469 Z M 77.859375 34.980469 C 77.960938 35.300781 78 35.640625 78 36 L 78 64 C 78 64.359375 77.960938 64.699219 77.859375 65.019531 L 62.800781 50 Z M 40 52.820312 L 41.78125 54.621094 C 44.042969 56.882812 47.019531 58 49.980469 58 C 52.960938 58 55.917969 56.882812 58.179688 54.621094 L 59.980469 52.820312 L 75.019531 67.859375 C 74.699219 67.960938 74.359375 68 74 68 L 26 68 C 25.640625 68 25.300781 67.960938 24.980469 67.859375 Z M 40 52.820312 "/></g></svg>
            </div>
        </div>
    );
}