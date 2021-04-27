<template>
  <main>
    <h1> Vue shimmer DEMO </h1>
    <section>
      <VShimmerRoot>
        <VShimmerRoot direction="row" width="100" heightPx="16">
          <VShimmerLine width="85" />
          <VShimmerBlock width="7" />
        </VShimmerRoot>
        <VShimmerRoot offsetTop="30" direction="row" width="100" heightPx="20">
          <VShimmerLine width="70" heightPx="20" />
          <VShimmerRoot direction="row" width="25" heightPx="20">
            <VShimmerBlock widthPx="12" heightPx="20" />
            <VShimmerBlock widthPx="12" heightPx="20" />
            <VShimmerBlock widthPx="12" heightPx="20" />
          </VShimmerRoot>
        </VShimmerRoot>
        <VShimmerRoot offsetTop="10" direction="row" width="100" heightPx="20">
          <VShimmerLine width="60" heightPx="20" />
          <VShimmerRoot direction="row" width="25" heightPx="20">
            <VShimmerBlock widthPx="12" heightPx="20" />
            <VShimmerBlock widthPx="12" heightPx="20" />
            <VShimmerBlock widthPx="12" heightPx="20" />
          </VShimmerRoot>
        </VShimmerRoot>
        <VShimmerRoot offsetTop="10" direction="row" width="100" heightPx="16">
          <VShimmerLine width="30" heightPx="16" />
          <VShimmerLine width="40" heightPx="16" />
        </VShimmerRoot>
        <VShimmerRoot offsetTop="15" direction="row" width="100" heightPx="16">
          <VShimmerLine width="70" heightPx="16" />
        </VShimmerRoot>
        <VShimmerRoot direction="row" offsetBottom="5">
          <VShimmerRoot
            class="c-blitz-card"
            centered
            :style="{
          justifyContent: 'center',
          backgroundColor: 'rgba(37, 54, 112, 0.05)',
        }"
            offsetTop="10"
            direction="column"
            width="48"
            heightPx="92"
          >
            <VShimmerLine width="40" heightPx="16" />
            <VShimmerLine offsetTop="5" width="25" heightPx="20" />
            <VShimmerLine offsetTop="5" width="90" heightPx="16" />
          </VShimmerRoot>
          <VShimmerRoot
            class="c-blitz-card"
            centered
            :style="{
          justifyContent: 'center',
          backgroundColor: 'rgba(37, 54, 112, 0.05)',
        }"
            offsetTop="10"
            direction="column"
            width="48"
            heightPx="92"
          >
            <VShimmerLine width="40" heightPx="16" />
            <VShimmerLine offsetTop="5" width="25" heightPx="20" />
            <VShimmerLine offsetTop="5" width="90" heightPx="16" />
          </VShimmerRoot>
        </VShimmerRoot>
      </VShimmerRoot>
    </section>
  </main>
</template>

<script>
export default {
  name: 'App'
}
</script>
