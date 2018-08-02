import { html } from "@polymer/lit-element";

export default html`
<style>
    /* https://cssreference.io/property/align-items/ */
    .own-text-middle{
        line-height: 38px;
    }
    
    .own-style-flex {
        /* width: 100%;
        height: 100%;
        display: flex;
        display: -webkit-flex; 
        border: 1px solid #c3c3c3; */
        display: -webkit-flex; /* Safari */
        display: flex;
        line-height: 1;
    }
    .own-flex-start {
        display: -webkit-flex; /* Safari */
        display: flex;
        -webkit-align-items: flex-start; /* Safari 7.0+ */
        align-items: flex-start;
    }
    .own-flex-baseline {
        display: -webkit-flex; /* Safari */
        display: flex;
        -webkit-align-items: baseline; 
        align-items: baseline;
    }
    .own-flex-middle {
        display: -webkit-flex; /* Safari */
        display: flex;
        -webkit-align-items: center; /* Safari 7.0+ */
        align-items: center;
    }
    .own-flex-end {
        display: -webkit-flex; /* Safari */
        display: flex;
        -webkit-align-items: flex-end; /* Safari 7.0+ */
        align-items: flex-end;
    }
    .own-flex-stretch {
        display: -webkit-flex; /* Safari */
        display: flex;
        -webkit-align-items: stretch; /* Safari 7.0+ */
        align-items: stretch;
    }
    .is-nav-black {
            background-color: black;
          }
    .title-body{
        font-size: 2em;
        text-align: center;
    }
    </style>
`;
