import { LitElement, html } from "@polymer/lit-element";

class headerTwo extends LitElement {
    _render() {
        return html`
        <style>
            nav {
                display: inline;
            }
        
            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                overflow: hidden;
                background-color: #FFF;
            }
        
            li {
                float: left;
                height: 64px;
                border-right: 1px solid #bbb;
            }
        
            li:last-child {
                border-right: none;
            }
        
            li a {
                display: block;
                color: black;
                text-align: center;
                padding: 23px 16px;
                text-decoration: none;
            }
        
            li a:hover:not(.active) {
                color: #FFF;
                background-color: #111;
            }
        
            .active {
                color: #FFF;
                background-color: black;
            }
        </style>
        <nav>
            <ul>
                <li>
                    <a class="active" href="#home">หน้าแรก</a>
                </li>
                <li>
                    <a href="#news">ข่าวสาร</a>
                </li>
                <li>
                    <a href="#contact">ติดต่อ</a>
                </li>
                <li style="float:right">
                    <a href="#about">เข้าสู่ระบบ</a>
                </li>
            </ul>
        </nav>
            `
    }
}
customElements.define('header-two', headerTwo)