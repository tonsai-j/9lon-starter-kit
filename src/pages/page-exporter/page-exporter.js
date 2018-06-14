import { html } from '@polymer/lit-element';
import { PageViewElement } from './../../components/page-view-element.js';
import { Mixin, MyMixin, MyMixinTwo, MyMixinThree } from './../../components/my-mixin.js'

// import './shared-styles.js';

class PageExporter extends Mixin(PageViewElement).with(MyMixin, MyMixinTwo, MyMixinThree) {
    _render() {
        return html`
             PageExporter
            <div class="card">
                <h1 on-click="${ e => this.test(e)}">go to dashboard</h1>
            </div>
            หน้าเพจ Exporter Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan, lorem id efficitur tincidunt,
            neque ligula euismod lectus, in imperdiet erat libero eu ligula. In ac varius nisl. Aliquam nunc augue, elementum eget dapibus
            quis, elementum id diam. Etiam condimentum, lacus et facilisis efficitur, lectus velit commodo lacus, quis pellentesque orci
            massa quis turpis. Fusce laoreet libero consectetur ante accumsan aliquet. Morbi ut elit in massa lobortis iaculis. Nunc
            quis erat libero. Cras convallis ex neque, et viverra quam tempor sed. Vestibulum efficitur elementum pulvinar. Aliquam aliquet
            scelerisque nisl. In hac habitasse platea dictumst. Suspendisse facilisis enim at est interdum, sed pellentesque ante aliquam.
            Donec lobortis dui quis ligula pharetra mattis. Pellentesque et cursus sem. Morbi commodo justo nec ullamcorper mollis. Praesent
            aliquam dui vitae dui efficitur finibus. Nulla blandit nisl in justo consequat vestibulum. Proin ac tristique turpis. Morbi
            vulputate risus a posuere condimentum. Etiam facilisis aliquet velit, id tempus felis tincidunt eu. Aliquam convallis nec
            tortor sit amet porttitor. Morbi malesuada accumsan lacus nec dapibus. In tempor felis at bibendum pellentesque. Suspendisse
            potenti. Ut lorem nunc, bibendum volutpat semper non, feugiat ac arcu.Quisque ut aliquam urna. Aliquam aliquet pellentesque
            mauris ac scelerisque. Maecenas facilisis feugiat erat at aliquet. Suspendisse quis convallis justo, a molestie purus. Quisque
            elit lectus, rhoncus id lacus sed, aliquam mattis purus. Sed et est dui. Integer aliquam vel felis id imperdiet. Maecenas
            ut ante sed metus sollicitudin eleifend et rutrum nisi. Suspendisse pretium libero at ultricies pharetra. Mauris ut libero
            massa. Praesent vehicula turpis id nisi gravida efficitur. Etiam tincidunt finibus metus euismod porttitor. Nunc aliquam
            purus at fermentum suscipit. Duis luctus risus nec accumsan facilisis. Suspendisse blandit pulvinar ex nec lacinia. Sed ac
            nulla vel libero porta consectetur et et risus. Nunc facilisis luctus mi a viverra. Ut quis dignissim felis. Donec varius
            laoreet scelerisque. Nulla non ipsum pellentesque, suscipit lectus eu, ullamcorper massa. Maecenas ornare metus est, a luctus
            ipsum venenatis id. Vivamus viverra non mauris eu maximus. Donec mattis iaculis semper. In non faucibus justo. Integer vel
            metus vestibulum, faucibus erat quis, lacinia nibh. Nunc quis odio fringilla, tincidunt est at, pharetra nisi. Pellentesque
            hendrerit lacinia metus. Sed efficitur tortor ac aliquet sollicitudin. Phasellus tincidunt rutrum ex, quis ultricies mi sodales
            eu. Suspendisse ullamcorper, dui vitae convallis sodales, felis ligula posuere quam, eu cursus ipsum magna id massa. In ipsum
            tellus, malesuada sit amet venenatis eu, bibendum ut orci. Vivamus ligula purus, cursus eget elementum non, finibus a augue.
            Donec sodales, ante non aliquet viverra, sapien nulla pretium lacus, ac pharetra erat felis sit amet lectus. Aliquam mollis
            turpis tristique, suscipit erat semper, aliquet libero. Praesent fermentum vulputate nisl eu dictum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Aenean accumsan, lorem id efficitur tincidunt, neque ligula euismod lectus, in imperdiet
            erat libero eu ligula. In ac varius nisl. Aliquam nunc augue, elementum eget dapibus quis, elementum id diam. Etiam condimentum,
            lacus et facilisis efficitur, lectus velit commodo lacus, quis pellentesque orci massa quis turpis. Fusce laoreet libero
            consectetur ante accumsan aliquet. Morbi ut elit in massa lobortis iaculis. Nunc quis erat libero. Cras convallis ex neque,
            et viverra quam tempor sed. Vestibulum efficitur elementum pulvinar. Aliquam aliquet scelerisque nisl. In hac habitasse platea
            dictumst. Suspendisse facilisis enim at est interdum, sed pellentesque ante aliquam. Donec lobortis dui quis ligula pharetra
            mattis. Pellentesque et cursus sem. Morbi commodo justo nec ullamcorper mollis. Praesent aliquam dui vitae dui efficitur
            finibus. Nulla blandit nisl in justo consequat vestibulum. Proin ac tristique turpis. Morbi vulputate risus a posuere condimentum.
            Etiam facilisis aliquet velit, id tempus felis tincidunt eu. Aliquam convallis nec tortor sit amet porttitor. Morbi malesuada
            accumsan lacus nec dapibus. In tempor felis at bibendum pellentesque. Suspendisse potenti. Ut lorem nunc, bibendum volutpat
            semper non, feugiat ac arcu. Quisque ut aliquam urna. Aliquam aliquet pellentesque mauris ac scelerisque. Maecenas facilisis
            feugiat erat at aliquet. Suspendisse quis convallis justo, a molestie purus. Quisque elit lectus, rhoncus id lacus sed, aliquam
            mattis purus. Sed et est dui. Integer aliquam vel felis id imperdiet. Maecenas ut ante sed metus sollicitudin eleifend et
            rutrum nisi. Suspendisse pretium libero at ultricies pharetra. Mauris ut libero massa. Praesent vehicula turpis id nisi gravida
            efficitur. Etiam tincidunt finibus metus euismod porttitor. Nunc aliquam purus at fermentum suscipit. Duis luctus risus nec
            accumsan facilisis. Suspendisse blandit pulvinar ex nec lacinia. Sed ac nulla vel libero porta consectetur et et risus. Nunc
            facilisis luctus mi a viverra. Ut quis dignissim felis. Donec varius laoreet scelerisque. Nulla non ipsum pellentesque, suscipit
            lectus eu, ullamcorper massa. Maecenas ornare metus est, a luctus ipsum venenatis id. Vivamus viverra non mauris eu maximus.
            Donec mattis iaculis semper. In non faucibus justo. Integer vel metus vestibulum, faucibus erat quis, lacinia nibh. Nunc
            quis odio fringilla, tincidunt est at, pharetra nisi. Pellentesque hendrerit lacinia metus. Sed efficitur tortor ac aliquet
            sollicitudin. Phasellus tincidunt rutrum ex, quis ultricies mi sodales eu. Suspendisse ullamcorper, dui vitae convallis sodales,
            felis ligula posuere quam, eu cursus ipsum magna id massa. In ipsum tellus, malesuada sit amet venenatis eu, bibendum ut
            orci. Vivamus ligula purus, cursus eget elementum non, finibus a augue. Donec sodales, ante non aliquet viverra, sapien nulla
            pretium lacus, ac pharetra erat felis sit amet lectus. Aliquam mollis turpis tristique, suscipit erat semper, aliquet libero.
            Praesent fermentum vulputate nisl eu dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan, lorem
            id efficitur tincidunt, neque ligula euismod lectus, in imperdiet erat libero eu ligula. In ac varius nisl. Aliquam nunc
            augue, elementum eget dapibus quis, elementum id diam. Etiam condimentum, lacus et facilisis efficitur, lectus velit commodo
            lacus, quis pellentesque orci massa quis turpis. Fusce laoreet libero consectetur ante accumsan aliquet. Morbi ut elit in
            massa lobortis iaculis. Nunc quis erat libero. Cras convallis ex neque, et viverra quam tempor sed. Vestibulum efficitur
            elementum pulvinar. Aliquam aliquet scelerisque nisl. In hac habitasse platea dictumst. Suspendisse facilisis enim at est
            interdum, sed pellentesque ante aliquam. Donec lobortis dui quis ligula pharetra mattis. Pellentesque et cursus sem. Morbi
            commodo justo nec ullamcorper mollis. Praesent aliquam dui vitae dui efficitur finibus. Nulla blandit nisl in justo consequat
            vestibulum. Proin ac tristique turpis. Morbi vulputate risus a posuere condimentum. Etiam facilisis aliquet velit, id tempus
            felis tincidunt eu. Aliquam convallis nec tortor sit amet porttitor. Morbi malesuada accumsan lacus nec dapibus. In tempor
            felis at bibendum pellentesque. Suspendisse potenti. Ut lorem nunc, bibendum volutpat semper non, feugiat ac arcu. Quisque
            ut aliquam urna. Aliquam aliquet pellentesque mauris ac scelerisque. Maecenas facilisis feugiat erat at aliquet. Suspendisse
            quis convallis justo, a molestie purus. Quisque elit lectus, rhoncus id lacus sed, aliquam mattis purus. Sed et est dui.
            Integer aliquam vel felis id imperdiet. Maecenas ut ante sed metus sollicitudin eleifend et rutrum nisi. Suspendisse pretium
            libero at ultricies pharetra. Mauris ut libero massa. Praesent vehicula turpis id nisi gravida efficitur. Etiam tincidunt
            finibus metus euismod porttitor. Nunc aliquam purus at fermentum suscipit. Duis luctus risus nec accumsan facilisis. Suspendisse
            blandit pulvinar ex nec lacinia. Sed ac nulla vel libero porta consectetur et et risus. Nunc facilisis luctus mi a viverra.
            Ut quis dignissim felis. Donec varius laoreet scelerisque. Nulla non ipsum pellentesque, suscipit lectus eu, ullamcorper
            massa. Maecenas ornare metus est, a luctus ipsum venenatis id. Vivamus viverra non mauris eu maximus. Donec mattis iaculis
            semper. In non faucibus justo. Integer vel metus vestibulum, faucibus erat quis, lacinia nibh. Nunc quis odio fringilla,
            tincidunt est at, pharetra nisi. Pellentesque hendrerit lacinia metus. Sed efficitur tortor ac aliquet sollicitudin. Phasellus
            tincidunt rutrum ex, quis ultricies mi sodales eu. Suspendisse ullamcorper, dui vitae convallis sodales, felis ligula posuere
            quam, eu cursus ipsum magna id massa. In ipsum tellus, malesuada sit amet venenatis eu, bibendum ut orci. Vivamus ligula
            purus, cursus eget elementum non, finibus a augue. Donec sodales, ante non aliquet viverra, sapien nulla pretium lacus, ac
            pharetra erat felis sit amet lectus. Aliquam mollis turpis tristique, suscipit erat semper, aliquet libero. Praesent fermentum
            vulputate nisl eu dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan, lorem id efficitur tincidunt,
            neque ligula euismod lectus, in imperdiet erat libero eu ligula. In ac varius nisl. Aliquam nunc augue, elementum eget dapibus
            quis, elementum id diam. Etiam condimentum, lacus et facilisis efficitur, lectus velit commodo lacus, quis pellentesque orci
            massa quis turpis. Fusce laoreet libero consectetur ante accumsan aliquet. Morbi ut elit in massa lobortis iaculis. Nunc
            quis erat libero. Cras convallis ex neque, et viverra quam tempor sed. Vestibulum efficitur elementum pulvinar. Aliquam aliquet
            scelerisque nisl. In hac habitasse platea dictumst. Suspendisse facilisis enim at est interdum, sed pellentesque ante aliquam.
            Donec lobortis dui quis ligula pharetra mattis. Pellentesque et cursus sem. Morbi commodo justo nec ullamcorper mollis. Praesent
            aliquam dui vitae dui efficitur finibus. Nulla blandit nisl in justo consequat vestibulum. Proin ac tristique turpis. Morbi
            vulputate risus a posuere condimentum. Etiam facilisis aliquet velit, id tempus felis tincidunt eu. Aliquam convallis nec
            tortor sit amet porttitor. Morbi malesuada accumsan lacus nec dapibus. In tempor felis at bibendum pellentesque. Suspendisse
            potenti. Ut lorem nunc, bibendum volutpat semper non, feugiat ac arcu. Quisque ut aliquam urna. Aliquam aliquet pellentesque
            mauris ac scelerisque. Maecenas facilisis feugiat erat at aliquet. Suspendisse quis convallis justo, a molestie purus. Quisque
            elit lectus, rhoncus id lacus sed, aliquam mattis purus. Sed et est dui. Integer aliquam vel felis id imperdiet. Maecenas
            ut ante sed metus sollicitudin eleifend et rutrum nisi. Suspendisse pretium libero at ultricies pharetra. Mauris ut libero
            massa. Praesent vehicula turpis id nisi gravida efficitur. Etiam tincidunt finibus metus euismod porttitor. Nunc aliquam
            purus at fermentum suscipit. Duis luctus risus nec accumsan facilisis. Suspendisse blandit pulvinar ex nec lacinia. Sed ac
            nulla vel libero porta consectetur et et risus. Nunc facilisis luctus mi a viverra. Ut quis dignissim felis. Donec varius
            laoreet scelerisque. Nulla non ipsum pellentesque, suscipit lectus eu, ullamcorper massa. Maecenas ornare metus est, a luctus
            ipsum venenatis id. Vivamus viverra non mauris eu maximus. Donec mattis iaculis semper. In non faucibus justo. Integer vel
            metus vestibulum, faucibus erat quis, lacinia nibh. Nunc quis odio fringilla, tincidunt est at, pharetra nisi. Pellentesque
            hendrerit lacinia metus. Sed efficitur tortor ac aliquet sollicitudin. Phasellus tincidunt rutrum ex, quis ultricies mi sodales
            eu. Suspendisse ullamcorper, dui vitae convallis sodales, felis ligula posuere quam, eu cursus ipsum magna id massa. In ipsum
            tellus, malesuada sit amet venenatis eu, bibendum ut orci. Vivamus ligula purus, cursus eget elementum non, finibus a augue.
            Donec sodales, ante non aliquet viverra, sapien nulla pretium lacus, ac pharetra erat felis sit amet lectus. Aliquam mollis
            turpis tristique, suscipit erat semper, aliquet libero. Praesent fermentum vulputate nisl eu dictum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Aenean accumsan, lorem id efficitur tincidunt, neque ligula euismod lectus, in imperdiet
            erat libero eu ligula. In ac varius nisl. Aliquam nunc augue, elementum eget dapibus quis, elementum id diam. Etiam condimentum,
            lacus et facilisis efficitur, lectus velit commodo lacus, quis pellentesque orci massa quis turpis. Fusce laoreet libero
            consectetur ante accumsan aliquet. Morbi ut elit in massa lobortis iaculis. Nunc quis erat libero. Cras convallis ex neque,
            et viverra quam tempor sed. Vestibulum efficitur elementum pulvinar. Aliquam aliquet scelerisque nisl. In hac habitasse platea
            dictumst. Suspendisse facilisis enim at est interdum, sed pellentesque ante aliquam. Donec lobortis dui quis ligula pharetra
            mattis. Pellentesque et cursus sem. Morbi commodo justo nec ullamcorper mollis. Praesent aliquam dui vitae dui efficitur
            finibus. Nulla blandit nisl in justo consequat vestibulum. Proin ac tristique turpis. Morbi vulputate risus a posuere condimentum.
            Etiam facilisis aliquet velit, id tempus felis tincidunt eu. Aliquam convallis nec tortor sit amet porttitor. Morbi malesuada
            accumsan lacus nec dapibus. In tempor felis at bibendum pellentesque. Suspendisse potenti. Ut lorem nunc, bibendum volutpat
            semper non, feugiat ac arcu. Quisque ut aliquam urna. Aliquam aliquet pellentesque mauris ac scelerisque. Maecenas facilisis
            feugiat erat at aliquet. Suspendisse quis convallis justo, a molestie purus. Quisque elit lectus, rhoncus id lacus sed, aliquam
            mattis purus. Sed et est dui. Integer aliquam vel felis id imperdiet. Maecenas ut ante sed metus sollicitudin eleifend et
            rutrum nisi. Suspendisse pretium libero at ultricies pharetra. Mauris ut libero massa. Praesent vehicula turpis id nisi gravida
            efficitur. Etiam tincidunt finibus metus euismod porttitor. Nunc aliquam purus at fermentum suscipit. Duis luctus risus nec
            accumsan facilisis. Suspendisse blandit pulvinar ex nec lacinia. Sed ac nulla vel libero porta consectetur et et risus. Nunc
            facilisis luctus mi a viverra. Ut quis dignissim felis. Donec varius laoreet scelerisque. Nulla non ipsum pellentesque, suscipit
            lectus eu, ullamcorper massa. Maecenas ornare metus est, a luctus ipsum venenatis id. Vivamus viverra non mauris eu maximus.
            Donec mattis iaculis semper. In non faucibus justo. Integer vel metus vestibulum, faucibus erat quis, lacinia nibh. Nunc
            quis odio fringilla, tincidunt est at, pharetra nisi. Pellentesque hendrerit lacinia metus. Sed efficitur tortor ac aliquet
            sollicitudin. Phasellus tincidunt rutrum ex, quis ultricies mi sodales eu. Suspendisse ullamcorper, dui vitae convallis sodales,
            felis ligula posuere quam, eu cursus ipsum magna id massa. In ipsum tellus, malesuada sit amet venenatis eu, bibendum ut
            orci. Vivamus ligula purus, cursus eget elementum non, finibus a augue. Donec sodales, ante non aliquet viverra, sapien nulla
            pretium lacus, ac pharetra erat felis sit amet lectus. Aliquam mollis turpis tristique, suscipit erat semper, aliquet libero.
            Praesent fermentum vulputate nisl eu dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan, lorem
            id efficitur tincidunt, neque ligula euismod lectus, in imperdiet erat libero eu ligula. In ac varius nisl. Aliquam nunc
            augue, elementum eget dapibus quis, elementum id diam. Etiam condimentum, lacus et facilisis efficitur, lectus velit commodo
            lacus, quis pellentesque orci massa quis turpis. Fusce laoreet libero consectetur ante accumsan aliquet. Morbi ut elit in
            massa lobortis iaculis. Nunc quis erat libero. Cras convallis ex neque, et viverra quam tempor sed. Vestibulum efficitur
            elementum pulvinar. Aliquam aliquet scelerisque nisl. In hac habitasse platea dictumst. Suspendisse facilisis enim at est
            interdum, sed pellentesque ante aliquam. Donec lobortis dui quis ligula pharetra mattis. Pellentesque et cursus sem. Morbi
            commodo justo nec ullamcorper mollis. Praesent aliquam dui vitae dui efficitur finibus. Nulla blandit nisl in justo consequat
            vestibulum. Proin ac tristique turpis. Morbi vulputate risus a posuere condimentum. Etiam facilisis aliquet velit, id tempus
            felis tincidunt eu. Aliquam convallis nec tortor sit amet porttitor. Morbi malesuada accumsan lacus nec dapibus. In tempor
            felis at bibendum pellentesque. Suspendisse potenti. Ut lorem nunc, bibendum volutpat semper non, feugiat ac arcu. Quisque
            ut aliquam urna. Aliquam aliquet pellentesque mauris ac scelerisque. Maecenas facilisis feugiat erat at aliquet. Suspendisse
            quis convallis justo, a molestie purus. Quisque elit lectus, rhoncus id lacus sed, aliquam mattis purus. Sed et est dui.
            Integer aliquam vel felis id imperdiet. Maecenas ut ante sed metus sollicitudin eleifend et rutrum nisi. Suspendisse pretium
            libero at ultricies pharetra. Mauris ut libero massa. Praesent vehicula turpis id nisi gravida efficitur. Etiam tincidunt
            finibus metus euismod porttitor. Nunc aliquam purus at fermentum suscipit. Duis luctus risus nec accumsan facilisis. Suspendisse
            blandit pulvinar ex nec lacinia. Sed ac nulla vel libero porta consectetur et et risus. Nunc facilisis luctus mi a viverra.
            Ut quis dignissim felis. Donec varius laoreet scelerisque. Nulla non ipsum pellentesque, suscipit lectus eu, ullamcorper
            massa. Maecenas ornare metus est, a luctus ipsum venenatis id. Vivamus viverra non mauris eu maximus. Donec mattis iaculis
            semper. In non faucibus justo. Integer vel metus vestibulum, faucibus erat quis, lacinia nibh. Nunc quis odio fringilla,
            tincidunt est at, pharetra nisi. Pellentesque hendrerit lacinia metus. Sed efficitur tortor ac aliquet sollicitudin. Phasellus
            tincidunt rutrum ex, quis ultricies mi sodales eu. Suspendisse ullamcorper, dui vitae convallis sodales, felis ligula posuere
            quam, eu cursus ipsum magna id massa. In ipsum tellus, malesuada sit amet venenatis eu, bibendum ut orci. Vivamus ligula
            purus, cursus eget elementum non, finibus a augue. Donec sodales, ante non aliquet viverra, sapien nulla pretium lacus, ac
            pharetra erat felis sit amet lectus. Aliquam mollis turpis tristique, suscipit erat semper, aliquet libero. Praesent fermentum
            vulputate nisl eu dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan, lorem id efficitur tincidunt,
            neque ligula euismod lectus, in imperdiet erat libero eu ligula. In ac varius nisl. Aliquam nunc augue, elementum eget dapibus
            quis, elementum id diam. Etiam condimentum, lacus et facilisis efficitur, lectus velit commodo lacus, quis pellentesque orci
            massa quis turpis. Fusce laoreet libero consectetur ante accumsan aliquet. Morbi ut elit in massa lobortis iaculis. Nunc
            quis erat libero. Cras convallis ex neque, et viverra quam tempor sed. Vestibulum efficitur elementum pulvinar. Aliquam aliquet
            scelerisque nisl. In hac habitasse platea dictumst. Suspendisse facilisis enim at est interdum, sed pellentesque ante aliquam.
            Donec lobortis dui quis ligula pharetra mattis. Pellentesque et cursus sem. Morbi commodo justo nec ullamcorper mollis. Praesent
            aliquam dui vitae dui efficitur finibus. Nulla blandit nisl in justo consequat vestibulum. Proin ac tristique turpis. Morbi
            vulputate risus a posuere condimentum. Etiam facilisis aliquet velit, id tempus felis tincidunt eu. Aliquam convallis nec
            tortor sit amet porttitor. Morbi malesuada accumsan lacus nec dapibus. In tempor felis at bibendum pellentesque. Suspendisse
            potenti. Ut lorem nunc, bibendum volutpat semper non, feugiat ac arcu. Quisque ut aliquam urna. Aliquam aliquet pellentesque
            mauris ac scelerisque. Maecenas facilisis feugiat erat at aliquet. Suspendisse quis convallis justo, a molestie purus. Quisque
            elit lectus, rhoncus id lacus sed, aliquam mattis purus. Sed et est dui. Integer aliquam vel felis id imperdiet. Maecenas
            ut ante sed metus sollicitudin eleifend et rutrum nisi. Suspendisse pretium libero at ultricies pharetra. Mauris ut libero
            massa. Praesent vehicula turpis id nisi gravida efficitur. Etiam tincidunt finibus metus euismod porttitor. Nunc aliquam
            purus at fermentum suscipit. Duis luctus risus nec accumsan facilisis. Suspendisse blandit pulvinar ex nec lacinia. Sed ac
            nulla vel libero porta consectetur et et risus. Nunc facilisis luctus mi a viverra. Ut quis dignissim felis. Donec varius
            laoreet scelerisque. Nulla non ipsum pellentesque, suscipit lectus eu, ullamcorper massa. Maecenas ornare metus est, a luctus
            ipsum venenatis id. Vivamus viverra non mauris eu maximus. Donec mattis iaculis semper. In non faucibus justo. Integer vel
            metus vestibulum, faucibus erat quis, lacinia nibh. Nunc quis odio fringilla, tincidunt est at, pharetra nisi. Pellentesque
            hendrerit lacinia metus. Sed efficitur tortor ac aliquet sollicitudin. Phasellus tincidunt rutrum ex, quis ultricies mi sodales
            eu. Suspendisse ullamcorper, dui vitae convallis sodales, felis ligula posuere quam, eu cursus ipsum magna id massa. In ipsum
            tellus, malesuada sit amet venenatis eu, bibendum ut orci. Vivamus ligula purus, cursus eget elementum non, finibus a augue.
            Donec sodales, ante non aliquet viverra, sapien nulla pretium lacus, ac pharetra erat felis sit amet lectus. Aliquam mollis
            turpis tristique, suscipit erat semper, aliquet libero. Praesent fermentum vulputate nisl eu dictum.
        `;
    }

    test() {
        // this._redirect('/page-dashboard')
        this._test()
        console.log(11111);
        
    }

    _pageActive(params) {
        console.log(params)
    }

}

customElements.define('page-exporter', PageExporter);