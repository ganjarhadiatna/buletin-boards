<template>
    <div class="">
        <div class="card-buletin-list" v-for="(item, index) in 5" :key="index">
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
                <div class="c-b-date">
                    <span class="txt-site txt-safe txt-bold">120</span>
                    Notes
                </div>
            </div>
            <!-- <div class="c-b-bot"></div> -->
        </div>
    </div>
</template>

