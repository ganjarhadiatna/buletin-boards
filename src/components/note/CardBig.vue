<template>
    <div class="">
        <div class="card-note" v-for="(item, index) in 4" :key="index">

            <div class="c-n-place">

                <!-- top -->

                <div class="c-n-main c-n-color-1">
                    
                    <div class="c-n-top">
                        <div class="c-n-profile">
                            <div class="col-1">
                                <div class="image image-35px image-circle"></div>
                            </div>
                            <div class="col-2">
                                <div class="c-n-data">
                                    <div class="c-n-name">Coca Code</div>
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
                        <div class="c-n-title">
                            Lorem ipsum dolor sit.
                        </div>
                        <div class="c-n-content">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Voluptatibus sunt debitis placeat quae accusamus, 
                            quibusdam qui fugiat fugit aut libero delectus, eligendi 
                            dolorum aspernatur?
                        </div>
                    </div>

                    <div class="c-n-bot">
                        <div class="c-n-info">
                            <div class="col-1">
                                <button class="c-n-btn btn btn-radius">
                                    <span class="icn fa fa-lg fa-heart"></span>
                                    <span class="ttl">45k</span>
                                </button>
                            </div>
                            <div class="col-2">
                                <button class="c-n-btn btn btn-radius">
                                    <span class="icn fa fa-lg fa-comment-alt"></span>
                                    <span class="ttl">45k</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- bottom -->
                <div class="c-n-receive">
                    <div class="col-1">
                        <div class="image image-35px image-radius"></div>
                    </div>
                    <div class="col-2">
                        <div class="c-n-name c-n-data">
                            Buletin Boards
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="c-n-icn">
                            <span class="fa fa-lg fa-angle-right"></span>
                        </div>
                    </div>
                </div>

            </div>            
        </div>
    </div>
</template>
