<template>
    <div>

        <div class="app-profile">
            <div class="col-1">
                <h1>
                    <router-link 
                        to="#" 
                        class="txt-site txt-small txt-bold txt-main txt-init-hover">
                        Ganjar Hadiatna
                    </router-link>
                </h1>
                <p class="txt-site txt-11 txt-primary txt-thin">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Soluta ducimus, sequi a ad sint quas libero non vitae.
                </p>
                <p class="txt-site txt-11 txt-main txt-bold">
                    Category
                </p>
            </div>
            <div class="col-2">
                <router-link to="#">
                    <div class="margin-top-10px image image-100px image-circle"></div>
                </router-link>
            </div>
        </div>

        <div class="margin-bottom-20px">
            <div class="menu-val">
                <ul>
                    <li>
                        <div class="val">E-mail</div>
                        <div class="ttl">ahuy@gmail.com</div>
                    </li>
                    <li>
                        <div class="val">Phone</div>
                        <div class="ttl">+62-8888-8888-8888</div>
                    </li>
                    <li>
                        <div class="val">Link</div>
                        <div class="ttl">https://lorem.com</div>
                    </li>
                    <li>
                        <div class="val">Address</div>
                        <div class="ttl">Lorem ipsum dolor sit</div>
                    </li>
                    <li class="right margin-top-10px" v-if="true">
                        <!-- <router-link :to="{name: 'user-setting-profile'}">
                            <button class="btn btn-grey3-color btn-circle">
                                <span class="fa fa-lg fa-pencil-alt"></span>
                            </button>
                        </router-link> -->
                        <router-link :to="{name: 'user-setting'}">
                            <button class="btn btn-grey3-color btn-radius">
                                <span class="fa fa-lg fa-cog"></span>
                                <span>Settings</span>
                            </button>
                        </router-link>
                    </li>
                    <li class="right margin-top-5px" v-if="false">
                        <button class="btn btn-main3-color btn-radius">
                            <span>Following</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>

        <div class="padding-5px"></div>

        <div class="a-b-block">
            <div class="a-b-b-top">
                <div class="col-1">
                    <div class="navigator nav-theme-4 nav-all">
                        <ul>
                            <li style="cursor: default;">
                                <span class="txt-site txt-12 txt-extra-bold txt-safe">120</span>
                                <span class="txt-site txt-11 txt-primary-color">Notes</span>
                            </li>
                            <li>
                                
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-2">
                    <router-link :to="{name: 'note-create'}">
                        <button class="btn btn-main2-color btn-radius">
                            <span class="txt-site txt-safe fa fa-lg fa-plus"></span>
                            <span class="txt-site txt-main">Send Notes</span>
                        </button>
                    </router-link>
                    <button class="btn btn-main2-color btn-circle">
                        <span class="fa fa-lg fa-bell-slash"></span>
                    </button>
                </div>
            </div>
            <div class="a-b-b-mid no-margin">
                <card-note></card-note>
                <card-note></card-note>
                <card-note></card-note>
            </div>
        </div>

    </div>
</template>
<script>
import cardNote from '@/components/note/Card'

export default {
    components: {
        'card-note': cardNote,
    }
}
</script>

