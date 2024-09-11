import { Batcher } from '../../../src/rendering/batcher/shared/Batcher';

import type { BatchableMeshElement, BatchableQuadElement } from '../../../src/rendering/batcher/shared/Batcher';
import type { Geometry } from '../../../src/rendering/renderers/shared/geometry/Geometry';
import type { Shader } from '../../../src/rendering/renderers/shared/shader/Shader';

export class TestBatcher extends Batcher
{
    public name: string;
    public vertexSize: number;
    public packAttributes(
        _element: BatchableMeshElement,
        _float32View: Float32Array,
        _uint32View: Uint32Array,
        _index: number,
        _textureId: number
    ): void
    {
        // do nothing
    }
    public packQuadAttributes(
        _element: BatchableQuadElement,
        _float32View: Float32Array,
        _uint32View: Uint32Array,
        _index: number,
        _textureId: number
    ): void
    {
        // do nothing
    }
    public shader: Shader;
    public geometry: Geometry;
}
