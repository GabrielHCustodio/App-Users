<template>
    <div class="registers">
        <div class="usersReg" v-for="u in usersRegister" :key="u.id">
            <div id="name"><p>{{u.name}}</p></div>
            <div id="age"><p>{{u.age}} anos</p></div>
            <div class="img" @click="dlt(u.id)"></div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'usersRegister',
    data() {
        return {
            usersRegister: []
        }
    },
    mounted() {
        this.usersRegister = JSON.parse(localStorage.getItem('users'))
    },
    methods: {
        dlt(id) {
            this.usersRegister.splice(id, 1)
        }
    }
}
</script>

<style scoped>
.registers {
    width: 360px;
    height: 300px;
    position: relative;
    overflow: auto;
}

.registers::-webkit-scrollbar {
    display: none;
}

.registers .usersReg {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    margin-bottom: 28px;
}

.usersReg #name,
.usersReg #age {
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
}

.usersReg #name p,
.usersReg #age p {
    color: #ffffff;
    font-size: 1.2rem;
}

.usersReg .img {
    background-image: url('/public/images/recycleBin.svg');
    width: 24px;
    height: 28px;
    cursor: pointer;
    margin-right: 0;
}
</style>