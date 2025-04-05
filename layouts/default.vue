<template>
	<div class="min-h-screen bg-black text-white">
		<!-- Header Component -->
		<header class="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
			<div class="max-w-[1440px] mx-auto px-4 lg:px-8">
				<div class="h-20 flex items-center justify-between">
					<div class="flex items-center space-x-4">
						<h1 class="text-2xl font-light tracking-wider">
							<span class="text-blue-400">ASTEROID</span> STATS
						</h1>
					</div>
					<nav class="hidden md:flex items-center space-x-8">
						<a href="#" class="text-sm text-gray-300 hover:text-white transition-colors">Home</a>
						<a href="#" class="text-sm text-gray-300 hover:text-white transition-colors">About</a>
						<a href="#" class="text-sm text-gray-300 hover:text-white transition-colors">Documentation</a>
					</nav>
				</div>
			</div>
		</header>

		<!-- Main Content -->
		<main class="pt-24 pb-12">
			<div class="max-w-[1440px] mx-auto px-4 lg:px-8">
				<slot />
			</div>
		</main>

		<!-- Footer -->
		<footer class="border-t border-white/10 py-8">
			<div class="max-w-[1440px] mx-auto px-4 lg:px-8">
				<div class="flex flex-col md:flex-row justify-between items-center">
					<p class="text-sm text-gray-400">© 2024 Asteroid Stats. All rights reserved.</p>
					<div class="flex space-x-6 mt-4 md:mt-0">
						<a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
						<a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>
