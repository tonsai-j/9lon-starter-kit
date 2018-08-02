import { html } from "@polymer/lit-element";

export default html`
<style>
    /* https://cssreference.io/property/align-items/ */
    .own-text-middle{
        line-height: 38px;
    }
    
    .own-style-flex {
        width: 100%;
        height: 100%;
        display: flex;
        display: -webkit-flex; /* Safari */
        /* border: 1px solid #c3c3c3; */
    }
    .own-flex-start {
        -webkit-align-items: flex-start; /* Safari 7.0+ */
        align-items: flex-start;
    }
    .own-flex-baseline {
        -webkit-align-items: baseline; 
        align-items: baseline;
    }
    .own-flex-middle {
        -webkit-align-items: center; /* Safari 7.0+ */
        align-items: center;
    }
    .own-flex-end {
        -webkit-align-items: flex-end; /* Safari 7.0+ */
        align-items: flex-end;
    }
    .own-flex-stretch {
        -webkit-align-items: stretch; /* Safari 7.0+ */
        align-items: stretch;
    }
    </style>
`;
