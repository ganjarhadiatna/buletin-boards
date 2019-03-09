<template>
    <div class="a-b-b-flex">
        <div 
            class="card-ctr-big" 
            v-for="(item, index) in 6" :key="index">
            <div class="c-t-cover">
                <div class="c-t-info">
                    <div class="c-t-icn">
                        <span class="icn fa fa-lg fa-plus"></span>
                    </div>
                    <div class="c-t-val">
                        Title Category
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
