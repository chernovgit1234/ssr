<template>
   <footer class="footer">
    <div class="footer__container _container">
      <div class="footer__body">
        <div class="footer__menu menu-footer">
            <div class="menu-footer__main">
              <a href="" class="menu-footer__logo"><span>1C School</span></a>
              <ul class="menu-footer__list-main">
                <li class="menu-footer__item-main">
                    ИП Чернов С. Д.
                </li>
                <li class="menu-footer__item-main">
                    ИНН 43434583486600
                </li>
                <li class="menu-footer__item-main">
                    ОГРНИП 34634634534534
                </li>
              </ul>
            </div>
            <div class="menu-footer__column">
              <h3 class="menu-footer__title">Информация</h3>
              <ul class="menu-footer__list">
                <li class="menu-footer__item">
                    <router-link to="/" class="menu-footer__link">О авторе курсов и статей</router-link>
                </li>
                <li class="menu-footer__item">
                    <router-link to="/" class="menu-footer__link">Статьи</router-link>
                </li>
              </ul>
            </div>
            <div class="menu-footer__column">
              <h3 class="menu-footer__title">Направления</h3>
              <ul class="menu-footer__list">
                <li class="menu-footer__item">
                    <router-link to="/" class="menu-footer__link">Курсы</router-link>
                </li>
                <li class="menu-footer__item">
                    <router-link to="/" class="menu-footer__link">Статьи</router-link>
                </li>
              </ul>
            </div>
            <div class="menu-footer__column">
              <h3 class="menu-footer__title">Соцсети</h3>
              <ul class="menu-footer__list">
                <li class="menu-footer__item">
                    <router-link to="/" class="menu-footer__link">Youtube</router-link>
                </li>
                <li class="menu-footer__item">
                    <router-link to="/" class="menu-footer__link">VK</router-link>
                </li>
                <li class="menu-footer__item">
                    <router-link to="/" class="menu-footer__link">Telegram</router-link>
                </li>
              </ul>
            </div>
        </div>
        <div class="footer__info">
            <span>Любое использование материалов с данного сайта, допускается не иначе как с письменного разрешения его правообладателя - 781714316555 ИНН/ОГРНИП номер от 317784700113455. В случае Использования материала с сайта и нарушение авторских и смежных прав, правообладателя наказывается в соответствии со ст 146 УК РФ. Вся информация предоставленная на сайте ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 (2) Гражданского кодекса РФ</span>
        </div>
      </div>
    </div>
   </footer>
</template>
  
<script lang="js">

import { defineComponent} from "vue";


export default defineComponent({
name: "Footer",
components: {
    
},
setup() {
    return {}
}
})
</script>