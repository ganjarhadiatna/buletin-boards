<template>
    <div>
        <div class="card-note-view">


            <div class="c-n-v-grid">

                <div class="c-n-v-col-1">

                    <!-- <div class="grid grid-2x margin-bottom-20px">
                        <div class="col-1">
                            <button class="btn btn-grey3-color btn-radius">
                                <span class="fa fa-lg fa-angle-left"></span>
                                <span>Back</span>
                            </button>
                            <button class="btn btn-grey3-color btn-circle">
                                <span class="fa fa-lg fa-pencil-alt"></span>
                            </button>
                        </div>
                        <div class="col-2 content-right">
                            <button class="btn btn-grey3-color btn-circle">
                                <span class="fa fa-lg fa-share-alt"></span>
                            </button>
                            <button class="btn btn-grey3-color btn-circle">
                                <span class="far fa-lg fa-comment-alt"></span>
                            </button>
                            <button class="btn btn-grey3-color btn-circle">
                                <span class="far fa-lg fa-heart"></span>
                            </button>
                        </div>
                    </div> -->
                    
                    <div class="c-n-v-note theme-1">
                        <div class="card-profile margin-20px">
                            <div class="c-p-col-1">
                                <router-link to="#">
                                    <div class="image image-full image-circle"></div>
                                </router-link>
                            </div>
                            <div class="c-p-col-2">
                                <div class="c-p-info">
                                    <div>
                                        <router-link to="#" class="txt-site txt-12 txt-bold txt-white txt-underline-hover">
                                            Full Name
                                        </router-link>
                                    </div>
                                    <div class="txt-site txt-10 txt-thin txt-white">
                                        Created on ?
                                    </div>
                                </div>
                            </div>
                            <div class="c-p-col-3">
                                <button class="btn btn-circle btn-main2-color">
                                    <span class="txt-site txt-white fa fa-lg fa-ellipsis-h"></span>
                                </button>
                            </div>
                        </div>

                        <h1 class="c-n-v-ttl">
                            Lorem ipsum dolor sit.
                        </h1>
                        <p class="c-n-v-desc" v-for="(item, index) in 4" :key="index">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Voluptatibus sunt debitis placeat quae accusamus, 
                            quibusdam qui fugiat fugit aut libero delectus, eligendi 
                            dolorum aspernatur?
                        </p>

                        <div class="c-n-v-block">
                            <a href="#" class="txt-site txt-12 txt-bold txt-white txt-underline-hover">
                                www.mandibola.com
                            </a>
                        </div>

                        <div class="grid grid-2x margin-20px">
                            <div class="col-1">
                                <button class="btn btn-main2-color btn-radius">
                                    <span class="txt-site txt-white far fa-lg fa-heart"></span>
                                    <span class="txt-site txt-12 txt-bold txt-white">120k</span>
                                </button>
                            </div>
                            <div class="col-2 content-right">
                                <button class="btn btn-main2-color btn-radius">
                                    <span class="txt-site txt-white far fa-lg fa-eye"></span>
                                    <span class="txt-site txt-12 txt-bold txt-white">120k</span>
                                </button>
                                <button class="btn btn-main2-color btn-radius">
                                    <span class="txt-site txt-white far fa-lg fa-comment-alt"></span>
                                    <span class="txt-site txt-12 txt-bold txt-white">120k</span>
                                </button>
                            </div>
                        </div>


                    </div>

                    <div class="padding-10px"></div>

                    <!-- For Owner -->
                    <div class="padding-10px">
                        <div class="grid grid-2x">
                            <div class="col-1">
                                <div class="txt-site txt-post-top">
                                    <div class="txt-site txt-14 txt-main txt-bold">
                                        Reply on buletin board?
                                    </div>
                                    <div class="txt-site txt-10 txt-primary">
                                        This note will send to "title" boards
                                    </div>
                                </div>
                            </div>
                            <div class="col-2 content-right">
                                <button class="btn btn-main-color">
                                    Send Notes
                                    <span class="fa fa-1x fa-arrow-right"></span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- comments -->
                    <div class="c-n-v-block">
                        <div class="c-n-v-b-top">
                            Comments
                        </div>
                        <div class="c-n-v-b-mids">
                            <div class="margin-bottom-10px">
                                <textarea 
                                    placeholder="Write your comments .."
                                    class="txt edit-text txt-primary-color"></textarea>
                            </div>
                            <div style="text-align: right;">
                                <button class="btn btn-main3-color">
                                    Post
                                </button>
                            </div>
                        </div>

                        <!-- comment content -->
                        <div class="c-n-v-mid">
                            <div 
                                class="card-comment margin-20px" 
                                v-for="(item, index) in 3" :key="index">
                                <div class="c-p-col-1">
                                    <router-link to="#">
                                        <div class="image image-full image-circle"></div>
                                    </router-link>
                                </div>
                                <div class="c-p-col-2">
                                    <div class="c-p-info">
                                        <div>
                                            <span class="txt-site txt-11 txt-bold txt-main txt-main-hover">
                                                <router-link to="#">
                                                    Full Name
                                                </router-link>
                                            </span>
                                            <span class="txt-site txt-11 txt-thin txt-primary">
                                                created on
                                            </span>
                                        </div>
                                        <div class="txt-site txt-11 txt-thin txt-main">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Dolore deserunt asperiores sint odit dignissimos optio, 
                                            quo aliquid quas incidunt repudiandae.
                                        </div>
                                    </div>
                                </div>
                                <div class="c-p-col-3">
                                    <button class="btn btn-circle btn-main2-color">
                                        <span class="fa fa-lg fa-ellipsis-h"></span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- more comment content -->
                        <div class="c-n-v-mid" style="text-align: center;">
                            <button class="btn btn-grey2-color">
                                Load More
                            </button>
                        </div>

                    </div>

                </div>

                <div class="c-n-v-col-2">

                    <div class="c-n-v-info c-n-v-fixed">

                        <div class="card-profile">
                            <div class="c-p-col-1">
                                <router-link to="#">
                                    <div class="image image-full image-radius"></div>
                                </router-link>
                            </div>
                            <div class="c-p-col-2">
                                <div class="c-p-info">
                                    <div class="txt-site txt-12 txt-bold txt-main">
                                        <router-link to="#">
                                            Buletin Boards
                                        </router-link>
                                    </div>
                                    <div class="txt-site txt-10 txt-thin txt-main">
                                        120 notes
                                    </div>
                                </div>
                            </div>
                            <div class="c-p-col-3">
                                <button class="btn btn-width-all btn-main2-color">
                                    <span class="fa fa-lg fa-angle-right"></span>
                                </button>
                            </div>
                        </div>

                        <div class="c-n-v-block">
                            <div class="c-n-v-b-top">
                                Category
                            </div>
                            <div class="c-n-v-b-mid">
                                <a href="#" class="txt-site txt-11 txt-bold txt-main txt-init-hover">
                                    Title CTR
                                </a>
                            </div>
                        </div>
                        
                        <div class="c-n-v-block">
                            <div class="c-n-v-b-top">
                                Tags
                            </div>
                            <div class="c-n-v-b-mid">
                                <div class="c-n-v-tag" v-for="(item, index) in 6" :key="index">
                                    Tag {{ item }}
                                </div>
                            </div>
                        </div>

                        <div class="c-n-v-block">
                            <div class="c-n-v-b-top">
                                Informations
                            </div>
                            <div class="c-n-v-b-mid">
                                <div 
                                    class="c-n-v-val" 
                                    v-for="(item, index) in 3" :key="index">
                                    <div class="c-v-col-1">
                                        <span class="txt-site txt-main txt-11">
                                            Likes
                                        </span>
                                    </div>
                                    <div class="c-v-col-2">
                                        <span class="txt-site txt-safe txt-11 txt-bold">
                                            120 K
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="c-n-v-block">
                            <div class="c-n-v-b-top">
                                Actions
                            </div>
                            <div class="c-n-v-b-mid">
                                <div 
                                    class="c-n-v-val" 
                                    v-for="(item, index) in 3" :key="index">
                                    <div class="c-v-col-1">
                                        <span class="txt-site txt-main txt-11">
                                            Delete note
                                        </span>
                                    </div>
                                    <div class="c-v-col-2">
                                        <span class="txt-site txt-primary fa fa-lg fa-1x fa-trash-alt"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </div>



    </div>
</template>
