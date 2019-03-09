<template>
    <div>
        <div class="card-notif c-color-1" v-for="(item, index) in 10" :key="index">
            <div class="col-1">
                <div class="image image-50px image-circle"></div>
            </div>
            <div class="col-2">
                <div class="c-n-place c-color-1">
                    <div class="c-n-message">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </div>
                    <div class="c-n-date">
                        Just now
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
