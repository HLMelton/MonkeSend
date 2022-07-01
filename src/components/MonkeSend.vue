<template>
  <div className="bg-gray">
      <form className="max-w-sm m-auto bg-white text-left p-10 rounded">
          <h1>MonkeSend</h1>
          <label className="inline-block text-color-slate-600">Email:</label>
          <input type="email" required v-model="email">

          <label>Role: </label>
          <select className="block w-full box-border m-3 rounded-sm" v-model="role">
              <option value="man">Monke Man</option>
              <option value="militia">Monke Militia</option>
              <option value="CEO">Monke CEO</option>
              <option value="builder">Monke Builder</option>
          </select>

          <div class="terms" required>
              <input type="checkbox" className="inline-block w-4 relative m-3" required v-model="terms">
              <label>Accept Terms and Conditions</label>
          </div>
          <button> Go Monke </button>
      </form>
      <div className="relative bg-left">
        <img src="/src/assets/Monke.png">
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            role: 'man',
            terms: false,
        }
    }
}
</script>

<style>
/* form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  } */
/* label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  } */
input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
/* input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  } */
.pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }
button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }
.submit {
    text-align: center;
  }
.error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
h1{
    margin: auto;
    width: 50%;
    padding: 0px;
}
</style>