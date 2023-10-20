import type { GlRenderingContext } from '../../context/GlRenderingContext';
import type { WebGLExtensions } from '../../context/WebGLExtensions';

/**
 * Returns a lookup table that maps each type-format pair to a compatible internal format.
 * @function mapTypeAndFormatToInternalFormat
 * @private
 * @param gl - The rendering context.
 * @param extensions - The WebGL extensions.
 * @returns Lookup table.
 */
export function mapFormatToGlInternalFormat(gl: GlRenderingContext, extensions: WebGLExtensions): Record<string, number>
{
    return {
        // 8-bit formats
        r8unorm: gl.R8,
        r8snorm: gl.R8_SNORM,
        r8uint: gl.R8UI,
        r8sint: gl.R8I,

        // 16-bit formats
        r16uint: gl.R16UI,
        r16sint: gl.R16I,
        r16float: gl.R16F,
        rg8unorm: gl.RG8,
        rg8snorm: gl.RG8_SNORM,
        rg8uint: gl.RG8UI,
        rg8sint: gl.RG8I,

        // 32-bit formats
        r32uint: gl.R32UI,
        r32sint: gl.R32I,
        r32float: gl.R32F,
        rg16uint: gl.RG16UI,
        rg16sint: gl.RG16I,
        rg16float: gl.RG16F,
        rgba8unorm: gl.RGBA,
        'rgba8unorm-srgb': gl.SRGB8_ALPHA8,

        // Packed 32-bit formats
        rgba8snorm: gl.RGBA8_SNORM,
        rgba8uint: gl.RGBA8UI,
        rgba8sint: gl.RGBA8I,
        bgra8unorm: gl.RGBA8,
        'bgra8unorm-srgb': gl.SRGB8_ALPHA8,
        rgb9e5ufloat: gl.RGB9_E5,
        rgb10a2unorm: gl.RGB10_A2,
        rg11b10ufloat: gl.R11F_G11F_B10F,

        // 64-bit formats
        rg32uint: gl.RG32UI,
        rg32sint: gl.RG32I,
        rg32float: gl.RG32F,
        rgba16uint: gl.RGBA16UI,
        rgba16sint: gl.RGBA16I,
        rgba16float: gl.RGBA16F,

        // 128-bit formats
        rgba32uint: gl.RGBA32UI,
        rgba32sint: gl.RGBA32I,
        rgba32float: gl.RGBA32F,

        // Depth/stencil formats
        stencil8: gl.STENCIL_INDEX8,
        depth16unorm: gl.DEPTH_COMPONENT16,
        depth24plus: gl.DEPTH_COMPONENT24,
        'depth24plus-stencil8': gl.DEPTH24_STENCIL8,
        depth32float: gl.DEPTH_COMPONENT32F,
        'depth32float-stencil8': gl.DEPTH32F_STENCIL8,

        // Compressed formats
        // 'bc1-rgba-unorm',
        // 'bc1-rgba-unorm-srgb',
        'bc2-rgba-unorm': extensions.s3tc.COMPRESSED_RGBA_S3TC_DXT3_EXT,
        'bc2-rgba-unorm-srgb': extensions.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,

        'bc3-rgba-unorm': extensions.s3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT,
        'bc3-rgba-unorm-srgb': extensions.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,
        // 'bc4-r-unorm'
        // 'bc4-r-snorm'
        // 'bc5-rg-unorm'
        // 'bc5-rg-snorm'
        // 'bc6h-rgb-ufloat'
        // 'bc6h-rgb-float'
        'bc7-rgba-unorm': extensions.bptc.COMPRESSED_RGBA_BPTC_UNORM_EXT,
        'bc7-rgba-unorm-srgb': extensions.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT,
        'etc2-rgb8unorm': extensions.etc.COMPRESSED_RGB8_ETC2,
        'etc2-rgb8unorm-srgb': extensions.etc.COMPRESSED_SRGB8_ETC2,
        'etc2-rgb8a1unorm': extensions.etc.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,
        'etc2-rgb8a1unorm-srgb': extensions.etc.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,
        'etc2-rgba8unorm': extensions.etc.COMPRESSED_RGBA8_ETC2_EAC,
        'etc2-rgba8unorm-srgb': extensions.etc.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC,
        'eac-r11unorm': extensions.etc.COMPRESSED_R11_EAC,
        // 'eac-r11snorm'
        'eac-rg11unorm': extensions.etc.COMPRESSED_SIGNED_RG11_EAC,
        // 'eac-rg11snorm'
        'astc-4x4-unorm': extensions.astc.COMPRESSED_RGBA_ASTC_4x4_KHR,
        'astc-4x4-unorm-srgb': extensions.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR,
        'astc-5x5-unorm': extensions.astc.COMPRESSED_RGBA_ASTC_5x5_KHR,
        'astc-5x5-unorm-srgb': extensions.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR,
        'astc-6x5-unorm': extensions.astc.COMPRESSED_RGBA_ASTC_6x5_KHR,
        'astc-6x5-unorm-srgb': extensions.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR,
        'astc-6x6-unorm': extensions.astc.COMPRESSED_RGBA_ASTC_6x6_KHR,
        'astc-6x6-unorm-srgb': extensions.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR,
        'astc-8x5-unorm': extensions.astc.COMPRESSED_RGBA_ASTC_8x5_KHR,
        'astc-8x5-unorm-srgb': extensions.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR,
        'astc-8x6-unorm':   extensions.astc.COMPRESSED_RGBA_ASTC_8x6_KHR,
        'astc-8x6-unorm-srgb': extensions.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR,
        'astc-8x8-unorm': extensions.astc.COMPRESSED_RGBA_ASTC_8x8_KHR,
        'astc-8x8-unorm-srgb': extensions.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR,
        'astc-10x5-unorm': extensions.astc.COMPRESSED_RGBA_ASTC_10x5_KHR,
        'astc-10x5-unorm-srgb': extensions.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR,
        'astc-10x6-unorm': extensions.astc.COMPRESSED_RGBA_ASTC_10x6_KHR,
        'astc-10x6-unorm-srgb': extensions.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR,
        'astc-10x8-unorm': extensions.astc.COMPRESSED_RGBA_ASTC_10x8_KHR,
        'astc-10x8-unorm-srgb': extensions.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR,
        'astc-10x10-unorm': extensions.astc.COMPRESSED_RGBA_ASTC_10x10_KHR,
        'astc-10x10-unorm-srgb': extensions.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR,
        'astc-12x10-unorm': extensions.astc.COMPRESSED_RGBA_ASTC_12x10_KHR,
        'astc-12x10-unorm-srgb': extensions.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR,
        'astc-12x12-unorm': extensions.astc.COMPRESSED_RGBA_ASTC_12x12_KHR,
        'astc-12x12-unorm-srgb': extensions.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR,
    };
}
