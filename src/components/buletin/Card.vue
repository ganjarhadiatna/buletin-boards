<template>
    <div class="a-b-b-flex">
        <div class="card-buletin-small" v-for="(item, index) in 3" :key="index">
            <div class="c-b-top">
                <!-- image here -->
                <router-link to="#">
                    <div class="image image-full image-circle"></div>
                </router-link>
            </div>
            <div class="c-b-mid">
                <router-link to="#" class="c-b-name">
                    Lorem ipsum dolor sit dolor
                </router-link>
                <p class="c-b-about">
                    Lorem ipsum, dolor sit ...
                </p>
                <div class="c-b-date">
                    <span class="txt-site txt-safe txt-bold">120</span>
                    Notes
                    |
                    <span class="txt-site txt-safe txt-bold">120</span>
                    Views
                </div>
            </div>
            <div class="c-b-bot margin-top-20px">
                <button class="btn btn-main-color btn-width-all">
                    Visit Board
                </button>
            </div>
        </div>
    </div>
</template>

