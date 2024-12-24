<template>
	<div>
		<!-- Header Component items -->
		<div class="bg-gray-100 h-[80px] grid grid-flow-col items-center justify-between">
			<h1 class="text-[24px] font-semibold max-w-[1440px] px-4 lg:px-[112px]">
				Asteroid Neo App 
			</h1>
			<p class="test-sm max-w-[1440px] px-4 lg:px-[112px] text-gray-300">Build V0.2</p>
		</div>
		<!-- Main Content Pages -->
		<div class="max-w-[1440px] p-4 lg:px-[112px]">
			<main>
				<slot />
			</main>
		</div>
	</div>
</template>
