<template>
    <header class="header">
      <div class="header__wrapper">
        <div class="header__container _container">
          <div class="header__body">
            <router-link to="/" class="header__logo"><span>1C Развитие</span></router-link>
            <div class="header__menu menu" v-if="!statusMenu">
                <nav class="menu__body">
                    <ul class="menu__list">
                        <li class="menu__item">
                            <router-link to="/" class="menu__link">Статьи по 1С</router-link>
                        </li>
                        <li class="menu__item">
                            <router-link to="/" class="menu__link">Курсы</router-link>
                        </li>
                        <li class="menu__item">
                            <router-link to="/about" class="menu__link">О авторе курсов и статей</router-link>
                        </li>
                        <li class="menu__item">
                            <router-link to="/" class="menu__link">Войти</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="header__button btn">
              Войти
            </div>
            <div class="menu__icon">
                <button class="menu__icon_btn btn" v-if="statusMenu" @click="changeMenu">
                    <img class="_menu-icon" src="../assets/icons/menu.svg" alt="png"/>
                </button>
                <button class="menu__icon_btn btn" v-if="!statusMenu" @click="changeMenu">
                    <img class="_menu-icon" src="../assets/icons/close.svg" alt="png"/>
                </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script lang="js">


import {onMounted, ref,  defineComponent, watch} from "vue";
import { useRoute , useRouter } from 'vue-router';

  export default defineComponent({
    name: "Header",
    components: {
        
    },
    setup() {
        const statusMenu = ref(false);
        const widthWindow = ref(0);
        const router = useRouter()
        const route = useRoute()
      
        onMounted(() => {
          window.addEventListener("resize", changeWindowSize);
        });

        function changeMenu() {
          statusMenu.value = !statusMenu.value
        }

        function changeWindowSize(value) {
          widthWindow.value = value.target.innerWidth
        }

        watch(widthWindow, (value) => {
           if (widthWindow.value >= 767) {

            statusMenu.value = false
           } else {
            statusMenu.value = true
           }
        })

        watch(route, () => {
          //statusMenu.value = true
        })
 
        return { statusMenu, changeMenu}
    }
  })
  </script>