import React from "react";
import theme from "theme";
import { Theme, Link, Section, Text, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="0px 0 0px 0"
			background="--color-primary"
			md-padding="96px 0 0px 0"
			sm-padding="72px 0 0px 0"
			overflow-x="visible"
			overflow-y="auto"
			flex-direction="row"
			align-items="stretch"
			height="auto"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" overflow-x="hidden" />
			<Section
				flex="0 1 auto"
				align-self="flex-start"
				overflow-x="auto"
				align-items="flex-start"
				flex-direction="column"
				overflow-y="visible"
				justify-content="flex-start"
				flex-wrap="wrap"
				align-content="inherit"
			/>
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="center"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--light"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					The DApp
				</Text>
				<Text
					margin="0px 0px 40px 0px"
					color="#FFFFFF"
					font="--lead"
					lg-text-align="center"
					lg-width="80%"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
				<Box
					display="flex"
					sm-flex-direction="column"
					sm-width="100%"
					sm-text-align="center"
					justify-content="flex-start"
					align-items="center"
				>
					<Link
						padding="12px 24px 12px 24px"
						color="--dark"
						background="--color-secondary"
						text-decoration-line="initial"
						font="--lead"
						border-radius="8px"
						margin="0px 16px 0px 0px"
						transition="background-color 0.2s ease-in-out 0s"
						hover-background="--color-orange"
						sm-margin="0px 0px 16px 0px"
						sm-text-align="center"
						sm-width="100%"
						hover-transition="background-color 0.2s ease-in-out 0s"
					>
						Issue Certificate
					</Link>
					<Box
						display="flex"
						sm-flex-direction="column"
						sm-width="100%"
						sm-text-align="center"
						justify-content="flex-start"
						align-items="center"
					>
						<Link
							href="/VerifyCert"
							padding="12px 24px 12px 24px"
							color="--dark"
							background="--color-secondary"
							text-decoration-line="initial"
							font="--lead"
							border-radius="8px"
							margin="0px 16px 0px 0px"
							transition="background-color 0.2s ease-in-out 0s"
							hover-background="--color-orange"
							sm-margin="0px 0px 16px 0px"
							sm-text-align="center"
							sm-width="100%"
							hover-transition="background-color 0.2s ease-in-out 0s"
						>
							Verify Certificate
						</Link>
					</Box>
				</Box>
			</Box>
			<Box
				display="flex"
				width="50%"
				justify-content="center"
				overflow-y="hidden"
				overflow-x="hidden"
				lg-width="100%"
			>
				<Image
					src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/phone.png?v=2021-08-25T23:23:42.448Z"
					width="555px"
					max-width="100%"
					transform="translateY(10px)"
					transition="transform 0.5s ease-in-out 0s"
					hover-transform="translateY(0px)"
					sm-width="100%"
				/>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"63d88d061d363b0026b57cb5"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});