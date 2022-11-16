import { Bought, Offerd } from "../generated/Contract/Contract"
import { DataBought, DataOfferd } from "../generated/schema"

  export function handleBought(event: Bought): void {

    let id = event.params._itemId.toString()
    let entity = DataBought.load(id)
  
    if (!entity) entity = new DataBought(id)
  
    entity.itemId = event.params._itemId
    entity.nft = event.params._nft.toHexString()
    entity.tokenId = event.params._tokenId
    entity.tokenURI = event.params._tokenURI
    entity.price = event.params._price
    entity.artist = event.params._artist.toHexString()
    entity.taxFee = event.params._taxFee
    entity.addressTaxFeeToken = event.params._addressTaxFeeToken.toHexString()
    entity.buyer = event.params._buyer.toHexString()
  
    entity.save()
  }
  
  export function handleOfferd(event: Offerd): void {
  
    let id = event.params._itemId.toString()
    let entity = DataOfferd.load(id)
  
    if (!entity) entity = new DataOfferd(id)
  
    entity.itemId = event.params._itemId
    entity.nft = event.params._nft.toHexString()
    entity.tokenId = event.params._tokenId
    entity.tokenURI = event.params._tokenURI
    entity.price = event.params._price
    entity.artist = event.params._artist.toHexString()
    entity.taxFee = event.params._taxFee
    entity.addressTaxFeeToken = event.params._addressTaxFeeToken.toHexString()
    entity.seller = event.params._seller.toHexString()
  
    entity.save()
  }
