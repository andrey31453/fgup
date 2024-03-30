<script setup lang="ts">
import {
	app_menu,
	app_main,
	app_footer,
	app_header,
	app_record,
	app_theme,
	app_user,
	app_wrapper,
} from '~widgets'

import { the_wrapper } from '~ui'
</script>

<template>
	<app_wrapper>
		<!-- header -->
		<app_header>
			<app_menu />
			<app_user />
			<app_theme />
		</app_header>
		<!-- /header -->

		<!-- main -->
		<app_main />
		<!-- /main -->

		<!-- footer -->
		<app_footer>
			<app_record />
		</app_footer>
		<!-- /footer -->
	</app_wrapper>
</template>
