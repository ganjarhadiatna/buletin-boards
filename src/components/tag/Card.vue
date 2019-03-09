<template>
    <div class="a-b-b-flex">
        <div class="card-tag c-t-shadow" v-for="(item, index) in 7" :key="index">
            <router-link to="#">
                <div class="c-t-info">
                    <div class="c-t-icn">
                        <span class="icn fa fa-1x fa-hashtag"></span>
                    </div>
                    <div class="c-t-val">
                        <div>Title tag {{ index }}</div>
                        <div class="c-t-date">20k Notes</div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
