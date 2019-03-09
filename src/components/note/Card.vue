<template>
    <div class="a-b-b-masonry">
        <div class="card-note" v-for="(item, index) in 12" :key="index">

            <div class="c-n-place">

                <!-- top -->

                <div class="c-n-main c-n-color-1">
                    
                    <div class="c-n-top">
                        <div class="c-n-profile">
                            <div class="col-1">
                                <router-link to="#">
                                    <div class="image image-35px image-circle"></div>
                                </router-link>
                            </div>
                            <div class="col-2">
                                <div class="c-n-data">
                                    <div class="c-n-name">
                                        <router-link to="#" class="txt-site txt-white txt-underline-hover">
                                            Coca Code
                                        </router-link>
                                    </div>
                                    <div class="c-n-date">4 minutes ago</div>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="c-n-icn">
                                    <span class="fa fa-lg fa-ellipsis-h"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="c-n-mid">
                        <router-link :to="{
                            name: 'note-view',
                            params: {
                                'idnotes': item
                            }
                        }">
                            <div class="c-n-title txt-site txt-underline-hover">
                                Lorem ipsum dolor sit.
                            </div>
                            <div class="c-n-content">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Voluptatibus sunt debitis placeat quae accusamus, 
                                quibusdam qui fugiat fugit aut libero delectus, eligendi 
                                dolorum aspernatur?
                            </div>
                        </router-link>
                    </div>

                    <div class="c-n-bot">
                        <div class="c-n-info">
                            <div class="col-1">
                                <button class="c-n-btn btn btn-radius">
                                    <span class="icn far fa-lg fa-heart"></span>
                                    <span class="ttl">45k</span>
                                </button>
                            </div>
                            <div class="col-2">
                                <button class="c-n-btn btn btn-radius">
                                    <span class="icn far fa-lg fa-comment-alt"></span>
                                    <span class="ttl">45k</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- bottom -->
                <div class="c-n-receive">
                    <div class="col-1">
                        <router-link to="#">
                            <div class="image image-35px image-radius"></div>
                        </router-link>
                    </div>
                    <div class="col-2">
                        <div class="c-n-name c-n-data">
                            <router-link to="#" class="txt-site txt-main txt-init-hover">
                                Buletin Boards
                            </router-link>
                        </div>
                    </div>
                    <div class="col-3">
                        <router-link to="#">
                            <div class="c-n-icn">
                                <span class="fa fa-lg fa-angle-right"></span>
                            </div>
                        </router-link>
                    </div>
                </div>

            </div>            
        </div>
    </div>
</template>
