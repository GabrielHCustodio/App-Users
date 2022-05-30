<template>
    <div class="registers">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'usersRegister'
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

.registers ul li {
    font-size: 30px;
    margin-top: 20px;
}
</style>