<template>
  <html>

  <div class="section">

    <div class="tiquete">

      <div class="obra">

        <slot name="obra" />

      </div>
      <div class="horario">

        <slot name="horario" />

      </div>
      <div class="asientos">

        <slot name="asientos" />

      </div>
      <div class="total">

        <slot name="total" />

      </div>

      <div class="atributo slogan">
          <span>Teatro Super HD - Desde 1999</span>

      </div>
    </div>
  </div>

  </html>

</template>

<script>
export default {

}
</script>

<style>
.tiquete{
    background-color: bisque;
    padding: 10px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.021); 
    border-radius: 5px
}
.obra{
font-size: 2.4rem;
font-weight: bold;
font-style: italic;
padding: 5px;
}
.horario{
font-size: 2.2rem;
margin: 20px;
}
.asientos{
    font-weight: bold;

  font-size: 2.4rem;
  padding: 5%;

}
.total{
   font-weight: bold;
   font-size: 2.4rem;

}
.slogan{
    font-weight: bold;
   font-size: 1.rem;

}
</style>