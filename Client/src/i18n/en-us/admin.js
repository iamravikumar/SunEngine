export default {

  // ——— categories ————————————————————————————————————

  CategoriesAdmin: {
    title: "Categories admin",
    addCategoryBtn: "Add category"
  },
  CategoryForm: {
    name: "Name (eng)",
    title: "Title",
    subTitle: "Subtitle",
    icon: "Icon",
    header: "Header",
    selectParent: "Parent category",
    deleteConfirm: "You want to remove the category?",
    parent: "Parent: ",
    hideCb: "Hide",
    settingsJson: "Json settings",
    appendUrlTokenCb: "Add to URL",
    appendUrlTokenInfo: "(use only if you understand what it is)",
    isMaterialsContainerCb: "Contains materials",
    materialsSubTitleInputType: "Material sub title input type",
    isMaterialsNameEditableCb: "Possibility to edit material name (eng), only for admin",
    isCaching: "Caching",
    cachingPageCount: "Cache N pages",
    noTypeLabel: "Without type",
    layout: "Layout",
    validation: {
      name: {
        required: "Enter category name (eng)",
        minLength: "Name (eng) must be at least 2 letters",
        allowedChars: "The name (eng) must consist of the characters `a-z`, `A-Z`, `0-9`, `-`"
      },
      title: {
        required: "Enter category title",
        minLength: "Category title must contain at least 3 letters"
      },
      icon: {
        minLength: "Minimal icon length - 3",
        maxLength: "Maximum icon length - " + config.DbColumnSizes.Categories_Icon,
      },
      parent: {
        required: "Select parent category"
      },
      settingsJson: {
        jsonFormatError: "Invalid Json format",
      }
    }
  },
  CategoryItem: {
    rootCategory: "Root category"
  },
  CreateCategory: {
    title: "Create category",
    createBtn: "Create",
    cancelBtn: "@:Global.btn.cancel",
    successNotify: "Category was added."
  },
  EditCategory: {
    title: "Edit category",
    deleteBtn: "Remove category",
    saveBtn: "@:Global.btn.save",
    cancelBtn: "@:Global.btn.cancel",
    deletedNotify: "Category successfully removed.",
    deleteConfirm: "You want to remove the category?",
    deleteDialogBtnOk: "Remove",
    deleteDialogBtnCancel: "Cancel",
    successNotify: "Category was updated."
  },

  // ——— components ———————————————————————————————————

  ComponentForm: {
    name: "Name (eng)",
    type: "Type",
    isCacheData: "Cache data",
    serverSettingsJson: "Server settings JSON",
    clientSettingsJson: "Client settings JSON",
    roles: "Roles to access",
    validation: {
      name: {
        required: "Enter name (eng)",
        minLength:  "Minimum component name length is 3",
        maxLength: "Maximum component name length is " + config.DbColumnSizes.Components_Name + "letters",
        allowedChars: "The name (eng) must consist of the characters `a-z`, `A-Z`, `0-9`, `-`, `_`"
      },
      type: {
        required: "Select type",
      },
      jsonFormatError: "@:Global.validation.validation",
    }
  },
  ComponentsAdmin: {
    title: "Components admin",
    addComponentBtn: "Add component"
  },
  CreateComponent: {
    title: "Set component",
    createBtn: "@:Global.btn.create",
    cancelBtn: "@:Global.btn.cancel"
  },
  EditComponent: {
    title: "Update component",
    saveBtn: "@:Global.btn.save",
    cancelBtn: "@:Global.btn.cancel",
    deleteBtn: "@:Global.btn.delete",
    deleteMsg: "Remove component?",
    btnDeleteOk: "@:Global.dialog.ok",
    btnDeleteCancel: "@:Global.dialog.cancel"
  },

  // ——— menuItems ————————————————————————————————————

  CreateMenuItem: {
    title: "Create menu item",
    createBtn: "@:Global.btn.create",
    cancelBtn: "@:Global.btn.cancel",
    successNotify: "Menu item successfully created"
  },
  EditMenuItem: {
    title: "Edit menu item",
    saveBtn: "@:Global.btn.save",
    cancelBtn: "@:Global.btn.cancel",
    successNotify: "Menu item successfully edited"
  },
  MenuAdminItem: {},
  MenuItemForm: {
    name: "Identifier (eng)",
    title: "Title",
    subTitle: "Sub title",
    parent: "Parent element",
    rootElement: "Root element",
    url: "Link internal or external",
    exact: "Highlight menu item only for exact match",
    roles: "Roles can see menu item",
    cssClass: "Css class",
    icon: "Icon",
    settingsJson: "Custom settings (Json)",
    isHidden: "Hide",
    local: "Local link",
    external: "External link",
    urlError: "Error in link",
    validation: {
      name: {
        minLength: "Minimal name length - 3",
        maxLength: "Maximum name length - " + config.DbColumnSizes.MenuItems_Name,
        allowedChars: "Only [a-zA-Z0-9_-] symbols allowed"
      },
      title: {
        required: "Title required",
        minLength: "Minimal title length - 3",
        maxLength: "Maximum title length - " + config.DbColumnSizes.Categories_Title,
      },
      subTitle: {
        minLength: "Minimal sub title length - 3",
        maxLength: "Maximum sub title length - " + config.DbColumnSizes.MenuItems_SubTitle,
      },
      cssClass: {
        minLength: "Minimal css class length - 3",
        maxLength: "Maximum css class length - " + config.DbColumnSizes.MenuItems_CssClass,
      },
      icon: {
        minLength: "Minimal icon length - 3",
        maxLength: "Maximum icon length - " + config.DbColumnSizes.MenuItems_Icon,
      },
      settingsJson: {
        jsonFormatError: "Invalid Json format",
      }
    }
  },
  MenuItemsAdmin: {
    title: "Menu editor",
    addMenuItemBtn: "Add menu item",
    deleteMsg: "Delete menu item?",
    btnDeleteOk: "@:Global.dialog.ok",
    btnDeleteCancel: "@:Global.dialog.cancel"
  },

  // ——— roles ————————————————————————————————————

  ProfileRoles: {
    roles: "User groups:",
    addRoleBtn: "Add to group",
    removeRoleBtn: "Remove from group",
    addRoleConfirmTitle: "",
    addRoleConfirmMessage: "Add to group '{0}'?",
    addRoleConfirmOkBtn: "Yes",
    addRoleConfirmCancelBtn: "@:Global.dialog.cancel",
    removeRoleConfirmTitle: "",
    removeRoleConfirmMessage: "Remove from group '{0}'?",
    removeRoleConfirmOkBtn: "Remove",
    removeRoleConfirmCancelBtn: "@:Global.dialog.cancel"
  },
  RolesPage: {
    title: "Groups",
    roles: "Groups",
  },
  RolesPermissions: {
    title: "Upload group config(json)",
    backupWarning: "Before uploading, you need to make a database backup.",
    saveToServerBtn: "Save",
    getFromServer: "Load from server",
    getSuccessNotify: "Download completed successfully",
    saveSuccessNotify: "Group settings were updated successfully",
    textAreaLabel: "Json file of roles config"
  },
  RoleUsers: {
    users: "Users",
    filter: "Find by name",
    noResults: "Not found",
    filterLimitReached: "First {0} results are derived"
  },

  // ——— all ————————————————————————————————————

  AdminMenu: {
    menuItems: "Menu",
    menuItemsCaption: "",
    categories: "Categories",
    categoriesCaption: "",
    components: "Components",
    componentsCaption: "",
    skins: "Skins",
    skinsCaption: "",
    rolesUsers: "Groups",
    rolesUsersCaption: "",
    rolesPermissions: "Permission",
    rolesPermissionsCaption: "",
    cacheSettings: "Cache settings",
    cacheSettingsCaption: "",
    configuration: "Configuration",
    configurationCaption: "",
    cypherSecrets: "Cypher keys",
    cypherSecretsCaption:"",
    imagesCleaner: "Disk cleaner",
    imagesCleanerCaption: "",
    deletedElements: "Deleted elements",
    deletedElementsCaption: "",
    version: "SunEngine version",
    resetCache: "Reset cache",
    resetCacheCaption: "",
    resetCacheSuccess: "Cache succesfully reseted"
  },
  AdminPage: {
    title: "@:AdminPanel.title"
  },
  AdminPanel: {
    title: "Admin panel"
  },
  CacheSettings: {
    title: "Cache settings",
    cachePolicy: "Cache policy",
    alwaysPolicy: "Always cache",
    neverPolicy: "Never cache",
    customPolicy: "Custom cache",
    cacheLifetime: "Cache record lifetime",
    saveChangesBtn: "Save changes",
    withoutInvalidationTime: "No time limit",
    successNotify: "Cache policy changed",
    error: "Server error",
    validation: {
      invalidateCacheTime: {
        required: "Require input",
        invalidValue: "Value can`t be lower 0",
      }
    }
  },
  ConfigurationAdmin: {
    title: "Site configuration",
    resetBtn: "@:Global.btn.reset",
    cancelBtn: "@:Global.btn.cancel",
    saveBtn: "@:Global.btn.save"
  },
  CypherSecrets: {
    title: "Reset cypher keys"
  },
  DeletedElements: {
    title: "Deleted elements",
    showDeleted: "Show deleted elements",
    info1: "If checked, deleted materials will shows on any single category.",
    info2: "If append '?deleted=1' to any single category URL deleted material will shows.",
    info3: "This function will not work on multi categories sections like 'new topics' on forum."
  },
  ImagesCleaner: {
    title: "Disk cleaner",
    info: "Lost images not using on site",
    clearBtn: "Delete lost images",
    refreshBtn: "Refresh lost images list",
    clearCount: "Cleared images: ",
    emptyResult: "Lost images not found"
  },
  SkinsAdmin: {
    title: "Skins admin",
    current: "Current",
    author: "Author: ",
    contacts: "Contacts: ",
    description: "Description: ",
    link: "Link to source.",
    version: "Version: ",
    upload: "Upload skin",
    uploadSuccessNotify: "Skin uploaded successfully",
    deleteSuccessNotify: "Skin deleted successfully",
    set: "Set",
    deleteMsg: "Delete skin?",
    btnDeleteOk: "@:Global.dialog.yes",
    btnDeleteCancel: "@:Global.dialog.cancel"
  }
}
