import React from 'react';
import {FacebookOutlined,BankOutlined,InstagramOutlined,GithubOutlined,LinkedinFilled} from '@ant-design/icons'
import Light from '../../assests/light.png';
import Earth from './icons';
import './index.css'

export default ()=>{
    return(
        <div className="contact-container">
            <div className="info-header">
                <span>
                    <Earth />
                </span>
                <h3>Giới thiệu</h3>
            </div>
            <div align="center" className="bio">
                <p>05 - 04 - 2000</p>
                <p>Fresher Web Front-end Developer </p>
                <p>Mình muốn học hỏi và trau dồi kinh nghiệm để phục vụ cho công việc.</p> <p> Mục tiêu trở thành Full-stack Developer.</p>
            </div>
            <hr id="line" />
            <div className="info-container">
                <div className="info">
                    <BankOutlined />
                    <p>Học Information Technology tại <strong> Học viện Công nghệ Bưu chính Viễn thông cơ sở tại TP.HCM </strong></p>
                </div>
                <div className="info">
                        <FacebookOutlined />
                        <a href="https://facebook.com/quocbao.duong.399" target="_blank"  rel="noopener noreferrer" >Dương Quốc Bảo</a>
                </div>
                <div className="info">
                    <InstagramOutlined />
                    <a href="https://instagram.com/quocbao.___" target="_blank"  rel="noopener noreferrer" >quocbao.___</a>
                </div>
                <div className="info">
                <GithubOutlined />
                    <a href="https://github.com/dqbaoptit"  target="_blank" rel="noopener noreferrer">dqbaoptit</a>
                </div>
                <div className="info">
                    <LinkedinFilled />
                    <a href="https://linkedin.com/in/duong-bao-a8934119a?fbclid=IwAR2fMJmXKhy1RfknijrDEiwpuN71bHYNzRqhGjZDrqYf3gejA31maR8zHpI" target="_blank"  rel="noopener noreferrer">duong-bao-a8934119a</a>
                </div>
                <div className="info">
                    <svg height="15" viewBox="0 0 512 512" width="15" ><path d="m256 0c-141.160156 0-256 114.839844-256 256s114.839844 256 256 256 256-114.839844 256-256-114.839844-256-256-256zm-15 125.65625c-22.820312-.980469-45.410156-4.1875-66.980469-9.402344 3.445313-8.164062 7.183594-16.003906 11.214844-23.433594 16.539063-30.476562 36.84375-51.863281 55.765625-59.609374zm0 30.023438v85.320312h-93.691406c1.320312-33.300781 6.996094-66.359375 16.382812-96.429688 24.875 6.265626 50.988282 10.058594 77.308594 11.109376zm0 115.320312v85.320312c-26.320312 1.050782-52.433594 4.84375-77.308594 11.109376-9.386718-30.070313-15.0625-63.128907-16.382812-96.429688zm0 115.34375v92.445312c-18.921875-7.746093-39.226562-29.132812-55.765625-59.609374-4.03125-7.429688-7.769531-15.269532-11.214844-23.433594 21.570313-5.214844 44.15625-8.421875 66.980469-9.402344zm30 0c22.820312.980469 45.410156 4.1875 66.980469 9.402344-3.445313 8.164062-7.183594 16.003906-11.214844 23.433594-16.539063 30.476562-36.84375 51.863281-55.765625 59.609374zm0-30.023438v-85.320312h93.691406c-1.320312 33.300781-6.996094 66.359375-16.382812 96.429688-24.875-6.265626-50.988282-10.058594-77.308594-11.109376zm0-115.320312v-85.320312c26.320312-1.050782 52.433594-4.84375 77.308594-11.109376 9.386718 30.070313 15.0625 63.128907 16.382812 96.429688zm0-115.34375v-92.445312c18.921875 7.746093 39.226562 29.132812 55.765625 59.609374 4.03125 7.429688 7.769531 15.269532 11.214844 23.433594-21.570313 5.214844-44.160157 8.421875-66.980469 9.402344zm82.132812-47.144531c-7.511718-13.84375-15.671874-26.046875-24.273437-36.457031 29.992187 10.242187 57.160156 26.628906 80.007813 47.644531-13.03125 6.980469-27.074219 13.042969-41.847657 18.109375-4.191406-10.179688-8.824219-19.972656-13.886719-29.296875zm-194.265624 0c-5.0625 9.324219-9.695313 19.117187-13.886719 29.296875-14.773438-5.066406-28.816407-11.132813-41.847657-18.109375 22.847657-21.015625 50.015626-37.402344 80.007813-47.644531-8.601563 10.410156-16.757813 22.609374-24.273437 36.457031zm-24.035157 57.492187c-10.238281 32.753906-16.257812 68.460938-17.554687 104.996094h-86.765625c3.210937-48.753906 21.933593-93.339844 51.292969-128.832031 16.292968 9.34375 34.136718 17.335937 53.027343 23.835937zm-17.554687 134.996094c1.296875 36.539062 7.316406 72.242188 17.554687 104.996094-18.890625 6.5-36.734375 14.492187-53.027343 23.835937-29.359376-35.492187-48.082032-80.078125-51.292969-128.832031zm27.703125 133.191406c4.191406 10.179688 8.824219 19.972656 13.886719 29.296875 7.515624 13.84375 15.671874 26.046875 24.273437 36.457031-29.992187-10.242187-57.160156-26.628906-80.003906-47.644531 13.023437-6.976562 27.070312-13.042969 41.84375-18.109375zm208.152343 29.296875c5.0625-9.324219 9.695313-19.117187 13.886719-29.296875 14.773438 5.066406 28.816407 11.132813 41.847657 18.109375-22.847657 21.015625-50.015626 37.402344-80.007813 47.644531 8.601563-10.410156 16.757813-22.609374 24.273437-36.457031zm24.035157-57.492187c10.238281-32.753906 16.257812-68.460938 17.554687-104.996094h86.765625c-3.210937 48.753906-21.933593 93.339844-51.292969 128.832031-16.292968-9.34375-34.136718-17.335937-53.027343-23.835937zm17.554687-134.996094c-1.296875-36.539062-7.316406-72.242188-17.554687-104.996094 18.890625-6.5 36.734375-14.492187 53.027343-23.835937 29.359376 35.492187 48.082032 80.078125 51.292969 128.832031zm0 0"/></svg>
                    <a href="https://dqbaoptit.github.io/dev/" target="_blank" rel="noopener noreferrer">dqbaoptit.github.io/dev/</a>
                </div>
            </div>
            <div className="cer" align="center">
               <img src={Light} alt="spot" width="300px"/>
            </div>
        </div>
    )
}