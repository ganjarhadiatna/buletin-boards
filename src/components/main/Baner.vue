<template>
    <div>
        
        <div class="a-b-cover theme-1">
            <div class="col-1">
                <div class="a-b-content">
                    <h1 class="txt-site txt-big txt-prm txt-bold">
                        Virtual Buletin Boards
                    </h1>
                    <p class="txt-site txt-12 txt-white txt-bold">
                        A place to share your
                        <span class="txt-site txt-prm">Thoughts</span>
                        and
                        <span class="txt-site txt-prm">Opinions</span>
                    </p>
                    
                    <div class="padding-10px"></div>
                    
                    <h2 class="txt-site txt-16 txt-prm txt-bold">What you can do?</h2>
                    <ul class="a-b-menu txt-site txt-white">
                        <li>
                            <div class="m-col-1">
                                <span class="far fa-lg fa-edit"></span>
                            </div>
                            <div class="m-col-2">
                                Send notes to buletin boards
                            </div>
                        </li>
                        <li>
                            <div class="m-col-1">
                                <span class="far fa-lg fa-comment-alt"></span>
                            </div>
                            <div class="m-col-2">
                                Join discussion with others
                            </div>
                        </li>
                        <li>
                            <div class="m-col-1">
                                <span class="far fa-lg fa-heart"></span>
                            </div>
                            <div class="m-col-2">
                                Give a loves to much notes
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-2">
                <div class="a-b-content-center">
                    
                    <div class="padding-bottom-15px">
                        <img src="@/assets/img/6.png" class="a-b-image">
                    </div>

                    <div class="margin-20px width width-300px width-center" v-if="$cookie.get('jwt')">
                        <p class="txt-site txt-12 txt-white txt-bold margin-10px">
                            Let's share your opinions with a notes.
                        </p>
                        <button class="btn btn-orange-color btn-width-all">
                            <span class="fa fa-lg fa-plus"></span>
                            <span>Create New Notes</span>
                        </button>
                    </div>

                    <div class="margin-20px width width-300px width-center" v-else>
                        <p class="txt-site txt-12 txt-white txt-bold margin-10px">
                            Let's create your own buletin board.
                        </p>
                        <router-link :to="{name: 'register'}">
                            <button class="btn btn-orange-color btn-width-all margin-bottom-10px">
                                <span>Create Buletin Board</span>
                            </button>
                        </router-link>
                        <router-link :to="{name: 'login'}">
                            <button class="btn btn-main4-color btn-width-all">
                                <span>Login</span>
                            </button>
                        </router-link>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
</template>
