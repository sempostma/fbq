# fbq

Cleanly integrates facebook pixel into your projects.

## Install 

```bash
npm install --save fbq
```

## Usage

### Simple usecase

```javascript
import { include, track } from 'fbq'

const pixel = 'xxxxxxxxxxxxxxx' // https://facebook.com/business/help/742478679120153

init(pixel)
track('PageView')
```

### More complex usecase

```javascript
import { include, track, trackCustom } from 'fbq'

const pixel = 'xxxxxxxxxxxxxxx' // https://facebook.com/business/help/742478679120153
const advancedMatching = {
    email: 'john@example.com',
    id: 'xxxxxxxxxxx'
} // https://www.facebook.com/business/help/611774685654668

const options = { 
    autoConfig: false
} // https://developers.facebook.com/docs/facebook-pixel/advanced#automatic-configuration

init(pixel)
track('PageView', advancedMatching, options)
```

## API

### Type aliases

* [TrackType](#tracktype)

### Functions

* [init](#const-init)
* [track](#const-track)
* [trackCustom](#const-trackcustom)

## Type aliases

###  TrackType

Ƭ **TrackType**: *"AddPaymentInfo" | "AddToCart" | "AddToWishlist" | "CompleteRegistration" | "Contact" | "CustomizeProduct" | "Donate" | "FindLocation" | "InitiateCheckout" | "Lead" | "Purchase" | "Schedule" | "Search" | "StartTrial" | "SubmitApplication" | "Subscribe" | "ViewContent" | "PageView"*

*Defined in [index.ts:33](https://github.com/sempostma/fbq/blob/989e188/src/index.ts#L33)*

## Functions

### `Const` init

▸ **init**(`pixelId`: string, `advancedMatching`: object, `options`: object): *boolean*

*Defined in [index.ts:4](https://github.com/sempostma/fbq/blob/989e188/src/index.ts#L4)*

**Parameters:**

▪ **pixelId**: *string*

▪`Default value`  **advancedMatching**: *object*= {}

▪`Default value`  **options**: *object*= { autoConfig: true }

Name | Type | Default |
------ | ------ | ------ |
`autoConfig` | boolean | true |

**Returns:** *boolean*

___

### `Const` track

▸ **track**(`trackType`: [TrackType](#tracktype), `options?`: any): *boolean*

*Defined in [index.ts:39](https://github.com/sempostma/fbq/blob/989e188/src/index.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`trackType` | [TrackType](#tracktype) |
`options?` | any |

**Returns:** *boolean*

___

### `Const` trackCustom

▸ **trackCustom**<**T**>(`trackType`: T, `options?`: any): *boolean*

*Defined in [index.ts:49](https://github.com/sempostma/fbq/blob/989e188/src/index.ts#L49)*

**Type parameters:**

▪ **T**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`trackType` | T |
`options?` | any |

**Returns:** *boolean*

## License

License: MIT
