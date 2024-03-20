<template lang="pug">

header(class="flex justify-between border-b border-slate-100 px-10 py-8")

    div(class="flex items-center gap-4")
      img(src="/logo.png", alt="Logo", class="w-10")
      div
        h2(class="text-xl font-bold uppercase") Vue Sneakers
        p(class="text-slate-500") Магазин лучших кроссовок
    
    ul(class="flex items-center gap-10")
      li(class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer")
        img(src="/cart.svg", alt="Cart")
        span 1205 руб.
      li(class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer") 
        img(src="/heart.svg", alt="Cart", srcset="")
        span Закладки
      li(class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer") 
        img(src="/profile.svg", alt="Cart", srcset="")
        span Профиль
        
</template>
