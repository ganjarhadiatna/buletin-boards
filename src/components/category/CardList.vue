<template>
    <div>
        <div 
            class="card-ctr-list" 
            v-for="(item, index) in 14" :key="index">
            <div class="c-t-icn">
                <span class="icn fa fa-lg fa-plus"></span>
            </div>
            <div class="c-t-info">
                <div class="c-t-val">
                    Title Category
                </div>
            </div>
        </div>
    </div>
</template>
